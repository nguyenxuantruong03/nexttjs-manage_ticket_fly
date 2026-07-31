import { DetailPage } from "@/components/detail/detail-page";
import { roomTypeFieldGroups } from "../components/step/field-groups";
import { HotelRoomTypeServerService } from "@/services/hotel/hotel-room-type/server";

type Props = {
  params: Promise<{
    roomTypeId: string;
  }>;
};

export default async function RoomTypeDetailPage({ params }: Props) {
  const { roomTypeId } = await params;
  const roomTypeData =
    await HotelRoomTypeServerService.getOne(roomTypeId);
  return (
    <DetailPage
      groups={roomTypeFieldGroups}
      data={roomTypeData}
      title={`RoomType ${roomTypeData.name}`}
    />
  );
}
