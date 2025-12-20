import DeleteSettingMenuItem from "@/feature/edit/DeleteSettingMenuItem";
import EditSettingMenuItem from "@/feature/edit/EditSettingMenuItem";
import MenuItem from "@/shared/ui/menu-item";

type Props = {
  onClose: () => void;
};

function TournamentSettingMenu({ onClose }: Props) {
  return (
    <div className="flex flex-col items-start w-full">
      <EditSettingMenuItem />
      <DeleteSettingMenuItem onClose={onClose} />
      <MenuItem onClick={onClose}>취소</MenuItem>
    </div>
  );
}

export default TournamentSettingMenu;
