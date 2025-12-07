import Typography from "@/shared/ui/typography";

function Title() {
  return (
    <div className="flex flex-col gap-[4px] pt-[32px] px-[20px]">
      <Typography variant="headline5" className="text-neutral-950">
        배드민턴대회 캘린더
      </Typography>
      <Typography variant="subHead2" className="text-semantic-text-info-bold">
        대회에 참여해 볼까요?
      </Typography>
    </div>
  );
}

export default Title;
