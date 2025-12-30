"use client";

import dynamic from "next/dynamic";
import { useEffect, useCallback } from "react";
import TournamentList from "@/feature/home/tournament-list";
import Title from "@/widget/home/title";
import { useListStateStore } from "@/shared/store/useListStateStore";

const DateSelector = dynamic(() => import("@/widget/home/date-selector"), {
  ssr: false,
  loading: () => (
    <div className="pt-[32px] pb-[20px] mx-[20px] border-b border-[#EEE] h-[77px]" />
  ),
});

function HomePage() {
  const { year, month, scrollPosition, setDate, setScrollPosition } =
    useListStateStore();

  const selectedDate = { year, month };

  const handleDateChange = useCallback(
    (date: { year: string; month: string }) => {
      setDate(date.year, date.month);
      setScrollPosition(0);
    },
    [setDate, setScrollPosition]
  );

  // 스크롤 위치 복원 (마운트 시 한 번만 실행)
  useEffect(() => {
    const savedPosition = scrollPosition;
    if (savedPosition > 0) {
      const timer = setTimeout(() => {
        window.scrollTo(0, savedPosition);
      }, 100);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 스크롤 위치 저장
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // 성능을 위해 throttle 적용
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [setScrollPosition]);

  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <Title />
        <DateSelector
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
      </div>
      <TournamentList year={selectedDate.year} month={selectedDate.month} />
    </div>
  );
}

export default HomePage;
