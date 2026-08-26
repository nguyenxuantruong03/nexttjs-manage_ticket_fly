import { HotelServerService } from "@/services/product-types/hotel/server";
import { hotelFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    hotelId: string;
  }>;
};

export default async function HotelDetailPage({ params }: Props) {
  const { hotelId } = await params;

  const hotelData = await HotelServerService.getOne(hotelId);

  return (
    <DetailPage
      groups={hotelFieldGroups}
      data={hotelData}
      title={`Hotel ${hotelData.name}`}
    />
  );
}
