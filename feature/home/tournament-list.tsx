"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { useInfiniteTournamentsByMonth } from "@/shared/api/tournaments";
import { useListStateStore } from "@/shared/store/useListStateStore";
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

const OVERSCROLL_DURATION = 1000; // 오버스크롤 지속 시간 (1초)

function TournamentList({ year, month }: Props) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteTournamentsByMonth(year, month);
  const goToNextMonth = useListStateStore((state) => state.goToNextMonth);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const overscrollStartTimeRef = useRef<number | null>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

  // 마지막 데이터에서 계속 스크롤 시 다음 달로 이동 (데이터가 있을 때만)
  useEffect(() => {
    // 데이터가 없으면 오버스크롤 감지 비활성화
    if (!hasData) return;

    const getScrollInfo = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const noScroll = scrollHeight <= clientHeight;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
      const maxScrollTop = scrollHeight - clientHeight;
      return { scrollTop, noScroll, atBottom, maxScrollTop };
    };

    const isOverscrolling = () => {
      const { noScroll, atBottom, scrollTop, maxScrollTop } = getScrollInfo();
      return noScroll || (atBottom && scrollTop >= maxScrollTop - 1);
    };

    const resetOverscroll = () => {
      overscrollStartTimeRef.current = null;
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
    };

    const startOverscrollTimer = () => {
      if (overscrollStartTimeRef.current !== null) return;

      overscrollStartTimeRef.current = Date.now();

      checkIntervalRef.current = setInterval(() => {
        if (!isOverscrolling()) {
          resetOverscroll();
          return;
        }

        const elapsed = Date.now() - (overscrollStartTimeRef.current ?? 0);
        if (elapsed >= OVERSCROLL_DURATION) {
          resetOverscroll();
          goToNextMonth();
        }
      }, 100);
    };

    const handleWheel = (e: WheelEvent) => {
      if (hasNextPage || isFetchingNextPage || isLoading) {
        resetOverscroll();
        return;
      }

      if (e.deltaY <= 0) {
        resetOverscroll();
        return;
      }

      if (isOverscrolling()) {
        startOverscrollTimer();
      } else {
        resetOverscroll();
      }
    };

    let isTouching = false;
    let touchCheckInterval: NodeJS.Timeout | null = null;

    const handleTouchStart = () => {
      if (hasNextPage || isFetchingNextPage || isLoading) return;

      isTouching = true;

      touchCheckInterval = setInterval(() => {
        if (!isTouching) {
          if (touchCheckInterval) clearInterval(touchCheckInterval);
          return;
        }
        if (isOverscrolling()) {
          startOverscrollTimer();
        }
      }, 100);
    };

    const handleTouchEnd = () => {
      isTouching = false;
      if (touchCheckInterval) {
        clearInterval(touchCheckInterval);
        touchCheckInterval = null;
      }
      resetOverscroll();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      resetOverscroll();
      if (touchCheckInterval) clearInterval(touchCheckInterval);
    };
  }, [hasData, hasNextPage, isFetchingNextPage, isLoading, goToNextMonth]);

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
