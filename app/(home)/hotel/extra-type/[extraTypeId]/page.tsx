import { DetailPage } from "@/components/detail/detail-page";
import { extraTypeFieldGroups } from "../components/step/field-groups";
import { HotelExtraTypeServerService } from "@/services/hotel/hotel-extra-type/server";

type Props = {
  params: Promise<{
    extraTypeId: string;
  }>;
};

export default async function ExtraTypeDetailPage({ params }: Props) {
  const { extraTypeId } = await params;
  const extraTypeData =
    await HotelExtraTypeServerService.getOne(extraTypeId);
  return (
    <DetailPage
      groups={extraTypeFieldGroups}
      data={extraTypeData}
      title={`ExtraType ${extraTypeData.name}`}
    />
  );
}
