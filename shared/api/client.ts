const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem("auth-storage");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.state?.token || null;
    }
  } catch {
    return null;
  }
  return null;
}

function clearAuthStorage(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem("auth-storage");
    window.location.href = "/sign-in";
  } catch {
    // ignore
  }
}

// Simple fetch wrapper
export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const token = getAuthToken();

  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options?.headers,
    },
  });

  if (!res.ok) {
    // 401 Unauthorized: 토큰 만료 시 로그아웃 처리
    if (res.status === 401 && !url.includes("/auth/login")) {
      clearAuthStorage();
    }
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || "API request failed");
  }

  return res.json();
}
