import TournamentList from "@/feature/home/tournament-list";
import DateSelector from "@/widget/home/date-selector";
import Title from "@/widget/home/title";

function HomePage() {
  return (
    <div>
      <Title />
      <DateSelector />
      {/* TournamentList */}
      <TournamentList />
    </div>
  );
}

export default HomePage;
