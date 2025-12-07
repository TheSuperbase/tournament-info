import { SolidButton } from "@/shared/ui/button";
import Input from "@/shared/ui/field";
import Typography from "@/shared/ui/typography";
import { useState } from "react";

function SignInForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="pt-[40px] px-[20px]">
      <div className="pb-[24px]">
        <Input
          value={id}
          onChange={(e) => setId(e.target.value)}
          label="아이디"
          placeholder="아이디를 입력해주세요."
        />
      </div>
      <div className="pb-[40px]">
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div className="flex flex-col gap-[20px] items-center justify-center">
        <SolidButton
          disabled={id === "" || password === ""}
          className="w-[295px]"
        >
          로그인
        </SolidButton>
        <Typography variant="subHead1" className="text-[#888]">
          현재 관리자만 로그인이 가능합니다.
        </Typography>
      </div>
    </div>
  );
}

export default SignInForm;
