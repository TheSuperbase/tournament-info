import Content from "@/feature/detail/Content";
import Header from "@/shared/ui/header";

type Props = {
  id: string;
};

function DetailPage({ id }: Props) {
  return (
    <div>
      <Header title="대회상세" />
      <Content id={id} />
    </div>
  );
}

export default DetailPage;
