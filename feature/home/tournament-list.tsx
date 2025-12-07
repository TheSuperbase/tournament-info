import Typography from "@/shared/ui/typography";
import TournamentItem from "@/widget/home/tournament-item";
import Image from "next/image";

function TournamentList() {
  const hasData = true; // TODO: 실제 데이터 여부로 변경

  return (
    <div className="px-[20px] pt-[20px] pb-[80px]">
      {hasData ? (
        /* 데이터가 있을 경우 */
        <div className="flex flex-col gap-[20px]">
          <Typography
            variant="subHead1"
            className="text-[#555]"
          >{`6일 (토)`}</Typography>
          <TournamentItem state="upcoming" />
          <TournamentItem state="progress" />
          <TournamentItem state="ended" />
        </div>
      ) : (
        /* 데이터가 없을 경우 */
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
