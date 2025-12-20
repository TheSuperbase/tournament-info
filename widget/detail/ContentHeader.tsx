import { Tournament } from "@/shared/api/types";
import StatusBadge from "@/shared/ui/status-badge";
import Typography from "@/shared/ui/typography";

type Props = {
  tournament: Tournament;
};

function getStatusFromDDay(dDay: number): { state: "ended" | "progress" | "upcoming"; label: string } {
  if (dDay < 0) {
    return { state: "ended", label: "경기종료" };
  } else if (dDay === 0) {
    return { state: "progress", label: "진행중" };
  } else {
    return { state: "upcoming", label: `D-${dDay}` };
  }
}

function ContentHeader({ tournament }: Props) {
  const status = getStatusFromDDay(tournament.dDay);

  return (
    <div className="py-[20px] px-[20px] flex flex-col gap-[12px]">
      <StatusBadge state={status.state} label={status.label} />
      <div className="flex flex-col gap-[6px]">
        <Typography
          variant="headline5"
          className="text-semantic-text-primary"
        >
          {tournament.name}
        </Typography>
        <Typography
          variant="subHead2"
          className="text-neutral-650"
        >
          {tournament.organizer}
        </Typography>
      </div>
    </div>
  );
}
export default ContentHeader;
