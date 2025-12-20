"use client";

import { useTournament } from "@/shared/api/tournaments";
import ContentBody from "@/widget/detail/ContentBody";
import ContentHeader from "@/widget/detail/ContentHeader";

type Props = {
  id: string;
};

function Content({ id }: Props) {
  const { data: tournament, isLoading } = useTournament(id);

  if (isLoading) {
    return <div className="px-[20px] py-[20px]">Loading...</div>;
  }

  if (!tournament) {
    return <div className="px-[20px] py-[20px]">대회 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <ContentHeader tournament={tournament} />
      <ContentBody tournament={tournament} />
    </div>
  );
}
export default Content;
