import { DetailPage } from "@/components/detail/detail-page";
import { sustainabilityFieldGroups } from "../components/step/field-groups";
import { HotelSustainabilityServerService } from "@/services/product-types/hotel/hotel-sustainability/server";

type Props = {
  params: Promise<{
    sustainabilityId: string;
  }>;
};

export default async function SustainabilityDetailPage({ params }: Props) {
  const { sustainabilityId } = await params;
  const sustainabilityData =
    await HotelSustainabilityServerService.getOne(sustainabilityId);
  return (
    <DetailPage
      groups={sustainabilityFieldGroups}
      data={sustainabilityData}
      title={`Sustainability ${sustainabilityData.name}`}
    />
  );
}
