import DetailPage from "@/view/detail";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Detail({ params }: Props) {
  const { id } = await params;
  return <DetailPage id={id} />;
}
