"use client";

import { useRouter } from "next/navigation";
import Icon from "@/shared/ui/icon";
import Typography from "@/shared/ui/typography";
import TournamentSettingButton from "@/widget/edit/tournament-setting-button";

type Props = {
  title: string;
};

function Header({ title }: Props) {
  const router = useRouter();

  return (
    <div className="px-[20px] py-[10px] h-[54px] flex items-center justify-center relative">
      <Typography variant="headline5" className="text-[#101014]">
        {title}
      </Typography>
      <Icon
        name="ArrowLeftOutlined"
        width={24}
        height={24}
        className="absolute left-[20px] text-[24px]"
        onClick={() => router.back()}
      />
      {/* TournamentSettingButton */}
      <TournamentSettingButton />
    </div>
  );
}
export default Header;
