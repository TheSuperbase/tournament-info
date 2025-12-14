"use client";

import { useTournamentsByMonth } from "@/shared/api/tournaments";
import Typography from "@/shared/ui/typography";
import TournamentItem from "@/widget/home/tournament-item";
import Image from "next/image";

type Props = {
  year: string;
  month: string;
};

function TournamentList({ year, month }: Props) {
  const { data: tournaments, isLoading } = useTournamentsByMonth(year, month);

  const hasData = tournaments && tournaments.length > 0;

  if (isLoading) {
    return <div className="px-[20px] pt-[20px] pb-[80px]">Loading...</div>;
  }

  return (
    <div className="px-[20px] pt-[20px] pb-[80px]">
      {hasData ? (
        <div className="flex flex-col gap-[20px]">
          {/* TODO: Group by date if needed. For now just flat list */}
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="flex flex-col gap-[10px]">
              {/* Date header placeholder - logic needed to group by start date */}
              <Typography variant="subHead1" className="text-[#555]">
                {tournament.tournamentPeriod.split("~")[0].trim()}
              </Typography>

              <TournamentItem key={tournament.id} tournament={tournament} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-[24px] pt-[100px]">
          <Image
            src="/image/empty-image.svg"
            alt="데이터 없음"
            width={92}
            height={90}
          />
          <div className="flex flex-col gap-[4px] items-center justify-center">
            <Typography variant="subHead1" className="text-[#101014]">
              열리는 대회가 없어요.
            </Typography>
            <Typography variant="body4" className="text-[#777792]">
              곧 새로운 대회들이 생겨날 예정이에요.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}
export default TournamentList;
