import Link from "next/link";
import Typography from "@/shared/ui/typography";
import StatusBadge from "@/shared/ui/status-badge";
import { Tournament } from "@/shared/api/types";

type Props = {
  tournament: Tournament;
};

const stateStyles = {
  ended: {
    borderColor: "border-[#787878]",
    label: "경기종료",
  },
  progress: {
    borderColor: "border-[#30B450]",
    label: "D-day",
  },
  upcoming: {
    borderColor: "border-blue-800",
    label: "D-",
  },
};

function TournamentItem({ tournament }: Props) {
  const dDay = tournament.dDay;

  let state: "ended" | "progress" | "upcoming" = "upcoming";
  if (dDay > 0) {
    state = "upcoming";
  } else if (dDay === 0) {
    state = "progress";
  } else {
    state = "ended";
  }

  const styles = stateStyles[state];
  const dDayLabel = state === "upcoming" ? `D-${dDay}` : styles.label;

  return (
    <Link prefetch={true} href={`/${tournament.id}`} className="block">
      <StatusBadge state={state} label={dDayLabel} />
      <div
        className={`mb-[6px] pl-[8px] border-l-[2px] ${styles.borderColor} min-h-[22px]`}
      >
        <Typography variant="body1" className="text-[#333] font-bold">
          {tournament.name}
        </Typography>
      </div>
      <Typography variant="subHead2" className="text-[#777792] font-medium">
        {tournament.location}ㆍ{tournament.organizer}
      </Typography>
    </Link>
  );
}
export default TournamentItem;
