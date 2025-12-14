"use client";

import { useState } from "react";
import { format } from "date-fns";
import TournamentList from "@/feature/home/tournament-list";
import DateSelector from "@/widget/home/date-selector";
import Title from "@/widget/home/title";

function HomePage() {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState({
    year: format(now, "yyyy"),
    month: format(now, "M"),
  });

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
