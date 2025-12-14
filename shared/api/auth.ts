import { useMutation } from "@tanstack/react-query";
import { fetcher } from "./client";
import { LoginRequest, LoginResponse } from "./types";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginRequest) =>
      fetcher<LoginResponse>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
}
