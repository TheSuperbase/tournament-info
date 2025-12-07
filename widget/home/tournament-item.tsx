import Typography from "@/shared/ui/typography";

function TournamentItem() {
  return (
    <div>
      <div className="px-[6px] py-[2px] mb-[6px] bg-blue-100 rounded-[4px] w-fit h-[20px] flex items-center justify-center">
        <Typography
          variant="caption3"
          className="text-blue-800 leading-none"
        >{`D-2`}</Typography>
      </div>
      <div className="mb-[6px] pl-[8px] border-l-[2px] border-blue-800 h-[22px]">
        <Typography
          variant="body1"
          className="text-[#333] font-bold"
        >{`제 17회 한전KPS 배드민턴대회`}</Typography>
      </div>
      <Typography variant="subHead2" className="text-[#777792] font-medium">
        {`양산중앙 체육관`}ㆍ{`위꾹`}
      </Typography>
    </div>
  );
}
export default TournamentItem;
