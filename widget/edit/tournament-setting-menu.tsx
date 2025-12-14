import DeleteSettingMenuItem from "@/feature/edit/DeleteSettingMenuItem";
import EditSettingMenuItem from "@/feature/edit/EditSettingMenuItem";

function TournamentSettingMenu() {
  return (
    <div>
      {/* EditSettingMenuItem */}
      <EditSettingMenuItem />
      {/* DeleteSettingMenuItem */}
      <DeleteSettingMenuItem />
    </div>
  );
}

export default TournamentSettingMenu;
