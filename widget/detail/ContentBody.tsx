import { Tournament } from "@/shared/api/types";
import Icon from "@/shared/ui/icon";
import Typography from "@/shared/ui/typography";

type Props = {
  tournament: Tournament;
};

function ContentBody({ tournament }: Props) {
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
          <TitleItem title="신청기간" description={tournament.applyPeriod} />
          <TitleItem
            title="대회기간"
            description={tournament.tournamentPeriod}
          />
          <TitleItem title="지역" description={tournament.region} />
          <TitleItem title="장소" description={tournament.location} />
          <TitleItem
            title="참가팀"
            description={tournament.participantTeams || ""}
          />
          <TitleItem title="주최" description={tournament.host} />
          <TitleItem title="주관" description={tournament.organizer} />
          <TitleItem title="후원" description={tournament.sponsor} />
          <TitleItem title="협찬" description={tournament.sponsorship} />
        </div>
      </div>
      {tournament.sponsorship && tournament.sponsorship.trim() !== "미정" && (
        <div className="flex flex-row items-center gap-[6px] rounded-[10px] bg-purple-50 py-[12px] px-[16px]">
          <Icon name="Heart" width={24} height={24} />
          <Typography variant="subHead2">
            이 대회는{" "}
            <Typography variant="subHead2" className="font-bold!">
              {tournament.sponsorship}
            </Typography>
            와 함께합니다
          </Typography>
        </div>
      )}
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
        className="text-semantic-text-secondary w-[76px] min-w-[76px]"
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
