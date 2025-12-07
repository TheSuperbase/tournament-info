import { createContext } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export type AuthContextType = AuthState & {
  login: (id: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
