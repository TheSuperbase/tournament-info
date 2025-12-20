"use client";

import { useRouter, usePathname } from "next/navigation";
import Icon from "@/shared/ui/icon";
import Typography from "@/shared/ui/typography";
import TournamentSettingButton from "@/widget/edit/tournament-setting-button";
import { useAuthStore } from "@/shared/store/useAuthStore";

type Props = {
  title: string;
};

function Header({ title }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();

  const isDetailPage = /^\/\d+$/.test(pathname);

  return (
    <div className="px-[20px] py-[10px] h-[54px] flex items-center justify-center relative">
      <Typography variant="headline5" className="text-[#101014]">
        {title}
      </Typography>
      <Icon
        name="ArrowLeftOutlined"
        width={20}
        height={20}
        className="absolute left-[20px] text-[20px]"
        onClick={() => router.back()}
      />
      <div className="absolute right-[20px]">
        {isAuthenticated && isDetailPage && <TournamentSettingButton />}
      </div>
    </div>
  );
}
export default Header;
