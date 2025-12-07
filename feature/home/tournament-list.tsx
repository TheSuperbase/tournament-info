import Typography from "@/shared/ui/typography";
import TournamentItem from "@/widget/home/tournament-item";

function TournamentList() {
  return (
    <div className="px-[20px] pt-[20px] pb-[80px]">
      <div className="flex flex-col gap-[20px]">
        <Typography
          variant="subHead1"
          className="text-[#555]"
        >{`6일 (토)`}</Typography>
        <TournamentItem />
      </div>
    </div>
  );
}
export default TournamentList;
