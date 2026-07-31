import { PlaceServerService } from "@/services/location/place/server";
import { placeFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    placeId: string;
  }>;
};

export default async function PlaceDetailPage({ params }: Props) {
  const { placeId } = await params;
  const placeData = await PlaceServerService.getOne(placeId);
  console.log()
    return (
      <DetailPage
        groups={placeFieldGroups}
        data={placeData}
        title={`Place ${placeData.name}`}
      />
    )
}
