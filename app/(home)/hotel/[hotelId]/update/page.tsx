import { HotelServerService } from "@/services/hotel/server";
import HotelForm from "../../components/HotelForm";

type Props = {
  params: Promise<{
    hotelId: string;
  }>;
};

export default async function HotelEditPage({ params }: Props) {
  const { hotelId } = await params;
  const hotelData = await HotelServerService.getOne(hotelId);

  return <HotelForm initialData={hotelData} />;
}
