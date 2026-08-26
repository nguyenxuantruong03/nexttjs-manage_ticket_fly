import { DetailPage } from "@/components/detail/detail-page";
import { diningServiceTypeFieldGroups } from "../components/step/field-groups";
import { HotelDiningServiceTypeServerService } from "@/services/product-types/hotel/hotel-dining-service-type/server";

type Props = {
  params: Promise<{
    diningServiceTypeId: string;
  }>;
};

export default async function DiningServiceTypeDetailPage({ params }: Props) {
  const { diningServiceTypeId } = await params;
  const diningServiceTypeata =
    await HotelDiningServiceTypeServerService.getOne(diningServiceTypeId);
  return (
    <DetailPage
      groups={diningServiceTypeFieldGroups}
      data={diningServiceTypeata}
      title={`DiningServiceType ${diningServiceTypeata.name}`}
    />
  );
}
