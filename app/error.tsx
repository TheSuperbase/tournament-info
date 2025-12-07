"use client";

import { useEffect } from "react";
import Image from "next/image";
import Typography from "@/shared/ui/typography";
import SolidButton from "@/shared/ui/button/SolidButton";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

function isNetworkError(error: Error): boolean {
  const networkErrorMessages = [
    "fetch failed",
    "network error",
    "failed to fetch",
    "networkerror",
    "load failed",
    "net::err",
  ];

  const errorMessage = error.message.toLowerCase();
  return networkErrorMessages.some((msg) => errorMessage.includes(msg));
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  const isNetwork = isNetworkError(error);

  if (isNetwork) {
    return (
      <div className="flex flex-col items-center justify-center gap-[24px] pt-[100px]">
        <Image
          src="/image/wifierrorsolid.svg"
          alt="error"
          width={108}
          height={108}
        />
        <div className="flex flex-col gap-[4px] items-center justify-center">
          <Typography variant="subHead1" className="text-[#101014]">
            네트워크 환경이 좋지 않아요.
          </Typography>
          <Typography variant="body4" className="text-[#777792]">
            잠시만 기다려주세요.
          </Typography>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center gap-[24px] pt-[100px]">
        <Image
          src="/image/empty-image.svg"
          alt="데이터 없음"
          width={92}
          height={90}
        />
        <div className="flex flex-col gap-[4px] pb-[20px] items-center justify-center">
          <Typography variant="subHead1" className="text-[#101014]">
            에러가 발생했어요.
          </Typography>
          <Typography variant="body4" className="text-[#777792]">
            잠시후 다시 시도해주세요.
          </Typography>
        </div>
        <SolidButton onClick={reset}>다시 시도</SolidButton>
      </div>
    );
  }
}
