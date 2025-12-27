import Link from "next/link";
import Typography from "@/shared/ui/typography";
import { Tournament } from "@/shared/api/types";

type Props = {
  tournament: Tournament;
};

function TournamentItem({ tournament }: Props) {
  const hasPlatform = !!tournament.platform && tournament.platform !== "미정";
  return (
    <Link prefetch={true} href={`/${tournament.id}`} className="block">
      <div className={`mb-[6px] min-h-[22px]`}>
        <Typography variant="body1" className="text-[#333] font-bold">
          {tournament.name}
        </Typography>
      </div>
      {hasPlatform ? (
        <Typography variant="subHead2" className="text-[#777792] font-medium">
          {tournament.location}ㆍ{tournament.platform}
        </Typography>
      ) : (
        <Typography variant="subHead2" className="text-[#777792] font-medium">
          {tournament.location}
        </Typography>
      )}
    </Link>
  );
}
export default TournamentItem;
