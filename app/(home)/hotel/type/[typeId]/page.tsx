import { DetailPage } from "@/components/detail/detail-page";
import { typeFieldGroups } from "../components/step/field-groups";
import { HotelTypeServerService } from "@/services/hotel/hotel-type/server";

type Props = {
  params: Promise<{
    typeId: string;
  }>;
};

export default async function TypeDetailPage({ params }: Props) {
  const { typeId } = await params;
  const typeData = await HotelTypeServerService.getOne(typeId);
  return (
    <DetailPage
      groups={typeFieldGroups}
      data={typeData}
      title={`Type ${typeData.name}`}
    />
  );
}
