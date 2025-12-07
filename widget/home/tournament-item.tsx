import Typography from "@/shared/ui/typography";

type Props = {
  state: "ended" | "progress" | "upcoming";
};

const stateStyles = {
  ended: {
    badgeBg: "bg-neutral-250",
    badgeText: "text-neutral-700",
    borderColor: "border-[#787878]",
    label: "경기종료",
  },
  progress: {
    badgeBg: "bg-[#EFFAF2]",
    badgeText: "text-[#30B450]",
    borderColor: "border-[#30B450]",
    label: "D-day",
  },
  upcoming: {
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800",
    borderColor: "border-blue-800",
    label: "D-",
  },
};

function TournamentItem({ state }: Props) {
  const styles = stateStyles[state];

  return (
    <div>
      <div
        className={`px-[6px] py-[2px] mb-[6px] ${styles.badgeBg} rounded-[4px] w-fit h-[20px] flex items-center justify-center`}
      >
        <Typography
          variant="caption3"
          className={`${styles.badgeText} leading-none`}
        >
          {styles.label}
          {state === "upcoming" ? `6` : ""}
        </Typography>
      </div>
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
    </div>
  );
}
export default TournamentItem;
