import Typography from "../typography";

const stateStyles = {
  ended: {
    badgeBg: "bg-neutral-250",
    badgeText: "text-neutral-700",
  },
  progress: {
    badgeBg: "bg-[#EFFAF2]",
    badgeText: "text-[#30B450]",
    borderColor: "border-[#30B450]",
  },
  upcoming: {
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800",
  },
};

type Props = {
  state: "ended" | "progress" | "upcoming";
  label: string;
};

function StatusBadge({ state, label }: Props) {
  const styles = stateStyles[state];
  return (
    <div
      className={`px-[6px] py-[2px] mb-[6px] ${styles.badgeBg} rounded-[4px] w-fit h-[20px] flex items-center justify-center`}
    >
      <Typography
        variant="caption3"
        className={`${styles.badgeText} leading-none`}
      >
        {label}
        {state === "upcoming" ? `6` : ""}
      </Typography>
    </div>
  );
}

export default StatusBadge;
