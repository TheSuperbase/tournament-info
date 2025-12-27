"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { useInfiniteTournamentsByMonth } from "@/shared/api/tournaments";
import Typography from "@/shared/ui/typography";
import TournamentItem from "@/widget/home/tournament-item";
import Image from "next/image";
import { parse, format } from "date-fns";
import { ko } from "date-fns/locale";
import StatusBadge from "@/shared/ui/status-badge";

function formatDateWithDay(dateStr: string): string {
  const parsed = parse(dateStr, "yyyy.MM.dd", new Date());
  return format(parsed, "d일 (E)", { locale: ko });
}

type Props = {
  year: string;
  month: string;
};

function TournamentList({ year, month }: Props) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteTournamentsByMonth(year, month);

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

  const tournaments = useMemo(
    () => data?.pages.flatMap((page) => page.items) ?? [],
    [data]
  );
  const hasData = tournaments.length > 0;

  const groupedTournaments = useMemo(() => {
    const groups: {
      date: string;
      items: typeof tournaments;
      state: "ended" | "progress" | "upcoming";
      dDayLabel: string;
    }[] = [];

    tournaments.forEach((tournament) => {
      const dateStr = tournament.tournamentPeriod.split("~")[0].trim();
      const formattedDate = formatDateWithDay(dateStr);

      const lastGroup = groups[groups.length - 1];
      if (lastGroup && lastGroup.date === formattedDate) {
        lastGroup.items.push(tournament);
      } else {
        const dDay = tournament.dDay;
        let state: "ended" | "progress" | "upcoming" = "upcoming";
        if (dDay > 0) {
          state = "upcoming";
        } else if (dDay === 0) {
          state = "progress";
        } else {
          state = "ended";
        }

        let dDayLabel = "";
        if (state === "ended") dDayLabel = "경기종료";
        else if (state === "progress") dDayLabel = "D-day";
        else dDayLabel = `D-${dDay}`;

        groups.push({
          date: formattedDate,
          items: [tournament],
          state,
          dDayLabel,
        });
      }
    });

    return groups;
  }, [tournaments]);

  if (isLoading) {
    return <div className="px-[20px] pt-[20px] pb-[80px]">Loading...</div>;
  }

  return (
    <div className="px-[20px] pt-[20px] pb-[80px] flex flex-col gap-[28px]">
      {hasData ? (
        <>
          {groupedTournaments.map((group) => {
            const stateBorderColors = {
              ended: "border-[#787878]",
              progress: "border-[#30B450]",
              upcoming: "border-[#4A56FF]",
            };
            const borderColor = stateBorderColors[group.state];

            return (
              <div
                key={group.date}
                className={`flex flex-col gap-[20px] border-l-[2px] pl-[20px] ${borderColor}`}
              >
                <div className="flex flex-row items-center justify-between">
                  <Typography variant="subHead1" className="text-[#555]">
                    {group.date}
                  </Typography>
                  <StatusBadge state={group.state} label={group.dDayLabel} />
                </div>
                <div className="flex flex-col gap-[20px]">
                  {group.items.map((tournament) => (
                    <TournamentItem
                      key={tournament.id}
                      tournament={tournament}
                    />
                  ))}
                </div>
              </div>
            );
          })}
          <div ref={loadMoreRef} className="h-px" />
          {isFetchingNextPage && (
            <div className="text-center py-4">Loading...</div>
          )}
        </>
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
