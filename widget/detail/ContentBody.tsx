import Icon from "@/shared/ui/icon";
import Typography from "@/shared/ui/typography";

function ContentBody() {
  return (
    <div className="px-[20px]">
      <div className="px-[16px] pt-[16px] pb-[20px] border border-[#E8E8ED] rounded-[10px] flex flex-col gap-[16px] mb-[28px]">
        <div className="flex flex-row items-center gap-[4px]">
          <Icon name="Trophy" width={24} height={24} />
          <Typography
            variant="subHead1"
            className="text-semantic-text-secondary"
          >
            대회정보
          </Typography>
        </div>
        <div className="flex flex-col gap-[10px]">
          <TitleItem
            title="신청기간"
            description={`2025년 11월 20일 - 11월 21일`}
          />
          <TitleItem
            title="대회기간"
            description={`2025년 12월 13일 - 12월 14일`}
          />
          <TitleItem title="지역" description={`강원도 철원군`} />
          <TitleItem title="장소" description={`철원실내체육관`} />
          <TitleItem title="참가팀" description={`129팀`} />
          <TitleItem title="주최" description={`철원군배드민턴협회`} />
          <TitleItem title="주관" description={`철원군배드민턴협회`} />
          <TitleItem title="후원" description={`철원군, 철원군의회`} />
          <TitleItem title="협찬" description={`인투스`} />
        </div>
      </div>
      <div className="flex flex-row items-center gap-[6px] rounded-[10px] bg-purple-50 py-[12px] px-[16px]">
        <Icon name="Heart" width={24} height={24} />
        <Typography variant="subHead2">
          이 대회는{" "}
          <Typography
            variant="subHead2"
            className="font-bold!"
          >{`인투스`}</Typography>
          와 함께합니다
        </Typography>
      </div>
    </div>
  );
}

type TitleItemProps = {
  title: string;
  description: string;
};

function TitleItem({ title, description }: TitleItemProps) {
  return (
    <div className="flex flex-row items-center gap-[4px]">
      <Typography
        variant="subHead2"
        className="text-semantic-text-secondary w-[76px]"
      >
        {title}
      </Typography>
      <Typography variant="subHead2" className="text-semantic-text-primary">
        {description}
      </Typography>
    </div>
  );
}
export default ContentBody;
