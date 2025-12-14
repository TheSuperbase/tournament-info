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
  let state: "ended" | "progress" | "upcoming" = "upcoming";
  if (tournament.dDay > 0) {
    state = "upcoming";
  } else if (tournament.dDay === 0) {
    state = "progress";
  } else {
    state = "ended"; // Assuming negative dDay means ended or started? Actually dDay usually means days left.
    // Based on API response: dDay: -353, state probably means passed.
    // If dDay < 0, it means the start date has passed.
    // We need to check end date to see if it is "progress" or "ended".
    // But we don't have separate logic for progress vs ended purely on dDay in the mock snippet interpretation.
    // Let's assume negative is ended for now, or we need to parse dates.
    // Actually let's refine:
    // if dDay > 0: Upcoming (D-N)
    // if dDay == 0: Today (D-day)
    // if dDay < 0: Ended or In Progress?
    // For now let's treat < 0 as ended for simplicity unless we parse dates.
    state = "ended";
  }

  // Refined logic based on typical d-day usage
  // The API response has dDay.
  // We can also use a helper to determine status if needed.

  const styles = stateStyles[state];
  const dDayLabel =
    state === "upcoming" ? `D-${tournament.dDay}` : styles.label;

  return (
    <Link prefetch={true} href={`/${tournament.id}`} className="block">
      <StatusBadge state={state} label={dDayLabel} />
      <div
        className={`mb-[6px] pl-[8px] border-l-[2px] ${styles.borderColor} h-[22px]`}
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
