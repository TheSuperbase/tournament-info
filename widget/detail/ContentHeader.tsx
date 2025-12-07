import StatusBadge from "@/shared/ui/status-badge";
import Typography from "@/shared/ui/typography";

function ContentHeader() {
  return (
    <div className="py-[20px] px-[20px] flex flex-col gap-[12px]">
      <StatusBadge state="ended" label="경기종료" />
      <div className="flex flex-col gap-[6px]">
        <Typography
          variant="headline5"
          className="text-semantic-text-primary"
        >{`제17회 철원오대쌀 오픈 배드민턴대회`}</Typography>
        <Typography
          variant="subHead2"
          className="text-neutral-650"
        >{`스포넷`}</Typography>
      </div>
    </div>
  );
}
export default ContentHeader;
