import { YachtServerService } from "@/services/yacht/server";
import YachtForm from "../../components/YachtForm";

type Props = {
  params: Promise<{
    yachtId: string;
  }>;
};

export default async function YachtEditPage({ params }: Props) {
  const { yachtId } = await params;
  const yachtData = await YachtServerService.getOne(yachtId);

  return <YachtForm initialData={yachtData} />;
}
