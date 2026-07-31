import { DetailPage } from "@/components/detail/detail-page";
import { bedTypeFieldGroups } from "../components/step/field-groups";
import { HotelBedTypeServerService } from "@/services/hotel/hotel-bed-type/server";

type Props = {
  params: Promise<{
    bedTypeId: string;
  }>;
};

export default async function BedTypeDetailPage({ params }: Props) {
  const { bedTypeId } = await params;
  const bedTypeData = await HotelBedTypeServerService.getOne(bedTypeId);
  return (
    <DetailPage
      groups={bedTypeFieldGroups}
      data={bedTypeData}
      title={`BedType ${bedTypeData.name}`}
    />
  );
}
