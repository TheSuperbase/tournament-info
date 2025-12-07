"use client";

import { useRouter } from "next/navigation";
import Icon from "@/shared/ui/icon";
import Typography from "@/shared/ui/typography";

function Header() {
  const router = useRouter();

  return (
    <div className="px-[20px] py-[10px] h-[54px] flex items-center justify-center relative">
      <Typography variant="headline5" className="text-[#101014]">
        대회상세
      </Typography>
      <Icon
        name="ArrowLeftOutlined"
        width={28}
        height={28}
        className="absolute left-[20px]"
        onClick={() => router.back()}
      />
    </div>
  );
}
export default Header;
