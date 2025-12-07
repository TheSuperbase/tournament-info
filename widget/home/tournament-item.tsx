import Link from "next/link";
import Typography from "@/shared/ui/typography";
import StatusBadge from "@/shared/ui/status-badge";

type Props = {
  state: "ended" | "progress" | "upcoming";
  tournamentId: string;
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

function TournamentItem({ state, tournamentId }: Props) {
  const styles = stateStyles[state];

  return (
    <Link prefetch={true} href={`/${tournamentId}`} className="block">
      <StatusBadge state={state} label={styles.label} />
      <div
        className={`mb-[6px] pl-[8px] border-l-[2px] ${styles.borderColor} h-[22px]`}
      >
        <Typography
          variant="body1"
          className="text-[#333] font-bold"
        >{`제 17회 한전KPS 배드민턴대회`}</Typography>
      </div>
      <Typography variant="subHead2" className="text-[#777792] font-medium">
        {`양산중앙 체육관`}ㆍ{`위꾹`}
      </Typography>
    </Link>
  );
}
export default TournamentItem;
