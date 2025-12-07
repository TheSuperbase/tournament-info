"use client";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/shared/store/useAuthStore";
import TextButton from "@/shared/ui/button/TextButton";
import Typography from "@/shared/ui/typography";

function Title() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/sign-in");
  };

  return (
    <div className="px-[20px] flex flex-row items-center justify-between">
      <div className="flex flex-col gap-[4px] pt-[32px]">
        <Typography variant="headline5" className="text-neutral-950">
          배드민턴대회 캘린더
        </Typography>
        <Typography variant="subHead2" className="text-semantic-text-info-bold">
          대회에 참여해 볼까요?
        </Typography>
      </div>
      {isAuthenticated && (
        <TextButton
          className="text-semantic-text-info-bold"
          textClassName="text-[14px]"
          onClick={handleLogout}
        >
          로그아웃
        </TextButton>
      )}
    </div>
  );
}

export default Title;
