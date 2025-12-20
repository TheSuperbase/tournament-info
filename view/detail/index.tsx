import Content from "@/feature/detail/Content";
import { AlertProvider } from "@/shared/providers/alertProvider";
import Header from "@/shared/ui/header";

type Props = {
  id: string;
};

function DetailPage({ id }: Props) {
  return (
    <AlertProvider>
      <div>
        <Header title="대회상세" />
        <Content id={id} />
      </div>
    </AlertProvider>
  );
}

export default DetailPage;
