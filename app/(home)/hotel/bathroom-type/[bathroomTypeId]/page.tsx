import { DetailPage } from "@/components/detail/detail-page";
import { HotelBathroomTypeServerService } from "@/services/hotel/hotel-bathroom-type/server";
import { bathroomTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    bathroomTypeId: string;
  }>;
};

export default async function BathroomTypeDetailPage({ params }: Props) {
  const { bathroomTypeId } = await params;
  const bathroomTypeData =
    await HotelBathroomTypeServerService.getOne(bathroomTypeId);
  return (
    <DetailPage
      groups={bathroomTypeFieldGroups}
      data={bathroomTypeData}
      title={`Bathroom Type ${bathroomTypeData.name}`}
    />
  );
}
