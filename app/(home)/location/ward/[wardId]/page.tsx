import { WardServerService } from "@/services/location/ward/server";
import { wardFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    wardId: string;
  }>;
};

export default async function WardDetailPage({ params }: Props) {
  const { wardId } = await params;
  const wardData = await WardServerService.getOne(wardId);
  return (
    <DetailPage
      groups={wardFieldGroups}
      data={wardData}
      title={`Ward ${wardData.name}`}
    />
  );
}
