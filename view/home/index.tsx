"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { format } from "date-fns";
import TournamentList from "@/feature/home/tournament-list";
import Title from "@/widget/home/title";

const DateSelector = dynamic(() => import("@/widget/home/date-selector"), {
  ssr: false,
  loading: () => (
    <div className="pt-[32px] pb-[20px] mx-[20px] border-b border-[#EEE] h-[77px]" />
  ),
});

function getInitialDate() {
  const now = new Date();
  return {
    year: format(now, "yyyy"),
    month: format(now, "M"),
  };
}

function HomePage() {
  const [selectedDate, setSelectedDate] = useState(getInitialDate);

  return (
    <div>
      <Title />
      <DateSelector
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <TournamentList year={selectedDate.year} month={selectedDate.month} />
    </div>
  );
}

export default HomePage;
