import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import Icon from "@/shared/ui/icon";
import { useCallback, useState } from "react";
import TournamentSettingMenu from "./tournament-setting-menu";

function TournamentSettingButton() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = useCallback((isOpen: boolean) => {
    // Drawer 닫힐 때 포커스 해제하여 aria-hidden 경고 방지
    if (!isOpen && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setOpen(isOpen);
  }, []);

  const handleClose = useCallback(() => {
    // 포커스 해제하여 aria-hidden 경고 방지
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setOpen(false);
  }, []);

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
      <DrawerContent className="pt-[32px] px-[20px] pb-[48px] w-full">
        <DrawerTitle className="pb-[10px] typography-headline-5">
          대회 관리
        </DrawerTitle>
        <TournamentSettingMenu onClose={handleClose} />
      </DrawerContent>
    </Drawer>
  );
}

export default TournamentSettingButton;
