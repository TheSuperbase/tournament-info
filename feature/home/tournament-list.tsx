"use client";

import { useEffect, useRef, useCallback } from "react";
import { useInfiniteTournamentsByMonth } from "@/shared/api/tournaments";
import Typography from "@/shared/ui/typography";
import TournamentItem from "@/widget/home/tournament-item";
import Image from "next/image";

type Props = {
  year: string;
  month: string;
};

function TournamentList({ year, month }: Props) {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteTournamentsByMonth(year, month);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  const tournaments = data?.pages.flatMap((page) => page.items) ?? [];
  const hasData = tournaments.length > 0;

  if (isLoading) {
    return <div className="px-[20px] pt-[20px] pb-[80px]">Loading...</div>;
  }

  return (
    <div className="px-[20px] pt-[20px] pb-[80px]">
      {hasData ? (
        <div className="flex flex-col gap-[20px]">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="flex flex-col gap-[10px]">
              <Typography variant="subHead1" className="text-[#555]">
                {tournament.tournamentPeriod.split("~")[0].trim()}
              </Typography>

              <TournamentItem tournament={tournament} />
            </div>
          ))}
          <div ref={loadMoreRef} className="h-[1px]" />
          {isFetchingNextPage && (
            <div className="text-center py-4">Loading...</div>
          )}
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
