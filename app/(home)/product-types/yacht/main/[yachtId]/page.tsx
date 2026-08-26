import { DetailPage } from "@/components/detail/detail-page";
import { YachtServerService } from "@/services/product-types/yacht/server";
import { yachtFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    yachtId: string;
  }>;
};

export default async function ProviderBookingEditPage({ params }: Props) {
  const { yachtId } = await params;

  const yachtData = await YachtServerService.getOne(yachtId);

  return (
    <DetailPage
      groups={yachtFieldGroups}
      data={yachtData}
      title={`Yacht ${yachtData.name}`}
    />
  );
}
