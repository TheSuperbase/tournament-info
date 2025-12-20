import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetcher } from "@/shared/api/client";
import { LoginRequest, LoginResponse } from "@/shared/api/types";

export type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

type AuthActions = {
  login: (id: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
};

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (id: string, password: string) => {
        set({ isLoading: true });
        try {
          const response = await fetcher<LoginResponse>("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ id, password } as LoginRequest),
          });

          const user: User = {
            id,
            name: "관리자",
            email: `${id}@example.com`,
          };

          set({
            user,
            token: response.token || null,
            isAuthenticated: true,
          });
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },

      setUser: (user) => {
        set({ user, isAuthenticated: user !== null });
      },

      setLoading: (isLoading) => {
        set({ isLoading });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
