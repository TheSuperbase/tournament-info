import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
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
      isAuthenticated: false,
      isLoading: false,

      login: async (id: string, password: string) => {
        set({ isLoading: true });
        try {
          // TODO: 실제 로그인 API 호출로 교체
          // const response = await fetch('/api/auth/login', {
          //   method: 'POST',
          //   body: JSON.stringify({ id, password }),
          // });
          // const data = await response.json();

          // 임시 로그인 로직 (admin/admin으로 로그인 가능)
          if (id === "admin" && password === "admin") {
            const mockUser: User = {
              id: "1",
              name: "관리자",
              email: "admin@example.com",
            };
            set({ user: mockUser, isAuthenticated: true });
          } else {
            throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
          }
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
        // TODO: 로그아웃 API 호출 및 토큰 삭제
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
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
