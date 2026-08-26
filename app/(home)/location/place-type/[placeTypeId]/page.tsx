import { PlaceTypeServerService } from "@/services/location/place/place-type/server";
import { placeTypeFieldGroups } from "../components/step/field-groups";

import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    placeTypeId: string;
  }>;
};

export default async function PlaceTypeDetailPage({ params }: Props) {
  const { placeTypeId } = await params;

  const placeTypeData = await PlaceTypeServerService.getOne(placeTypeId);

  return (
    <DetailPage
      groups={placeTypeFieldGroups}
      data={placeTypeData}
      title={`Place Type ${placeTypeData.name}`}
    />
  );
}
