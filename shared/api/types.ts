export interface Tournament {
  id: number;
  name: string;
  tournamentPeriod: string;
  applyPeriod: string;
  region: string;
  location: string;
  participantTeams: string;
  host: string;
  organizer: string;
  sponsor: string;
  sponsorship: string;
  platform?: string;
  dDay: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTournamentRequest {
  name: string;
  startDate: string;
  endDate: string;
  applyStartDate: string;
  applyEndDate: string;
  region: string;
  location: string;
  participantTeams: number;
  host: string;
  organizer: string;
  sponsor: string;
  sponsorship: string;
  platform?: string;
}

export type UpdateTournamentRequest = Partial<CreateTournamentRequest>;

export interface TournamentListResponse {
  items: Tournament[];
  nextCursor: string | null;
  hasMore: boolean;
}

export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}
