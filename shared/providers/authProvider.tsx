"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";

import { AuthContext, type User } from "@/shared/context/authContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = user !== null;

  const login = useCallback(async (id: string, password: string) => {
    setIsLoading(true);
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
          role: "admin",
        };
        setUser(mockUser);
      } else {
        throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    // TODO: 로그아웃 API 호출 및 토큰 삭제
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      setUser,
    }),
    [user, isAuthenticated, isLoading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
