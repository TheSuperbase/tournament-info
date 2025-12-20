import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { fetcher } from "./client";
import {
  CreateTournamentRequest,
  Tournament,
  UpdateTournamentRequest,
  TournamentListResponse,
} from "./types";

export const tournamentKeys = {
  all: ["tournaments"] as const,
  lists: () => [...tournamentKeys.all, "list"] as const,
  list: (filters: string) => [...tournamentKeys.lists(), { filters }] as const,
  details: () => [...tournamentKeys.all, "detail"] as const,
  detail: (id: string) => [...tournamentKeys.details(), id] as const,
  month: (year: string, month: string) =>
    [...tournamentKeys.all, "month", year, month] as const,
};

// GET /tournaments
export function useTournaments() {
  return useQuery({
    queryKey: tournamentKeys.lists(),
    queryFn: () => fetcher<Tournament[]>("/api/tournaments"),
  });
}

// GET /tournaments/month
export function useTournamentsByMonth(year: string, month: string) {
  return useQuery({
    queryKey: tournamentKeys.month(year, month),
    queryFn: async () => {
      const response = await fetcher<TournamentListResponse>(
        `/api/tournaments/month?year=${year}&month=${month}`
      );
      return response.items;
    },
    enabled: !!year && !!month,
  });
}

// GET /tournaments/month with infinite scroll (cursor-based)
export function useInfiniteTournamentsByMonth(year: string, month: string) {
  return useInfiniteQuery({
    queryKey: [...tournamentKeys.month(year, month), "infinite"],
    queryFn: ({ pageParam }) =>
      fetcher<TournamentListResponse>(
        `/api/tournaments/month?year=${year}&month=${month}${pageParam ? `&cursor=${pageParam}` : ""}`
      ),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextCursor : undefined,
    enabled: !!year && !!month,
  });
}

// GET /tournaments/{id}
export function useTournament(id: string) {
  return useQuery({
    queryKey: tournamentKeys.detail(id),
    queryFn: () => fetcher<Tournament>(`/api/tournaments/${id}`),
    enabled: !!id,
  });
}

// POST /tournaments
export function useCreateTournament() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTournamentRequest) =>
      fetcher("/api/tournaments", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tournamentKeys.lists() });
    },
  });
}

// PATCH /tournaments/{id}
export function useUpdateTournament(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateTournamentRequest) =>
      fetcher(`/api/tournaments/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tournamentKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: tournamentKeys.lists() });
    },
  });
}

// DELETE /tournaments/{id}
export function useDeleteTournament() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      fetcher(`/api/tournaments/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tournamentKeys.lists() });
    },
  });
}
