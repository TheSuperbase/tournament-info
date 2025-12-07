import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { useAlert } from "@/shared/hooks/useAlert";
import { useAuthStore } from "@/shared/store/useAuthStore";
import { SolidButton } from "@/shared/ui/button";
import Input from "@/shared/ui/field";
import Typography from "@/shared/ui/typography";

function SignInForm() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { showAlert } = useAlert();
  const { login, isLoading } = useAuthStore();

  const handleLogin = useCallback(async () => {
    try {
      await login(id, password);
      router.push("/");
    } catch (error) {
      showAlert({
        title: "안내메시지",
        description:
          error instanceof Error
            ? error.message
            : "로그인에 실패했습니다. 다시 시도해주세요.",
      });
    }
  }, [id, password, login, router, showAlert]);

  return (
    <div className="pt-[40px] px-[20px]">
      <div className="pb-[24px]">
        <Input
          variant="outline"
          value={id}
          onChange={(e) => setId(e.target.value)}
          label="아이디"
          placeholder="아이디를 입력해주세요."
        />
      </div>
      <div className="pb-[40px]">
        <Input
          variant="outline"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div className="flex flex-col gap-[20px] items-center justify-center">
        <SolidButton
          disabled={id === "" || password === "" || isLoading}
          className="w-[295px]"
          onClick={handleLogin}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </SolidButton>
        <Typography variant="subHead1" className="text-[#888]">
          현재 관리자만 로그인이 가능합니다.
        </Typography>
      </div>
    </div>
  );
}

export default SignInForm;
