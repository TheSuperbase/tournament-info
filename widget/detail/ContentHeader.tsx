import { Tournament } from "@/shared/api/types";
import StatusBadge from "@/shared/ui/status-badge";
import Typography from "@/shared/ui/typography";

type Props = {
  tournament: Tournament;
};

function getStatusFromDDay(dDay: number): {
  state: "ended" | "progress" | "upcoming";
  label: string;
} {
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
  const hasPlatform = !!tournament.platform && tournament.platform !== "미정";

  return (
    <div className="py-[20px] px-[20px] flex flex-col gap-[12px]">
      <div className="flex flex-row items-center gap-[12px]">
        <StatusBadge state={status.state} label={status.label} />
        {hasPlatform && (
          <div
            className={`px-[6px] py-[2px] mb-[6px] bg-[#EBE4FF] rounded-[4px] w-fit h-[20px] flex items-center justify-center`}
          >
            <Typography
              variant="caption3"
              className="leading-none text-purple-800"
            >
              {tournament.platform}
            </Typography>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-[6px]">
        <Typography variant="headline5" className="text-semantic-text-primary">
          {tournament.name}
        </Typography>
        {/* <Typography variant="subHead2" className="text-neutral-650">
          {tournament.organizer}
        </Typography> */}
      </div>
    </div>
  );
}
export default ContentHeader;
