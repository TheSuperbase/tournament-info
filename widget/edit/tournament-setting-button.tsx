import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import Icon from "@/shared/ui/icon";
import { useState } from "react";
import TournamentSettingMenu from "./tournament-setting-menu";

function TournamentSettingButton() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>
        <button>
          <Icon
            name="MoreOutlined"
            width={24}
            height={24}
            className="text-[20px]"
          />
        </button>
      </DrawerTrigger>
      <DrawerContent className="pt-[32px] px-[20px] pb-[48px]">
        <DrawerTitle className="sr-only">대회 설정</DrawerTitle>
        <TournamentSettingMenu />
      </DrawerContent>
    </Drawer>
  );
}

export default TournamentSettingButton;
