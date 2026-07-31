import { DetailPage } from "@/components/detail/detail-page";
import { roomCategoryFieldGroups } from "../components/step/field-groups";
import { HotelRoomCategoryServerService } from "@/services/hotel/hotel-room-category/server";

type Props = {
  params: Promise<{
    roomCategoryId: string;
  }>;
};

export default async function RoomCategoryDetailPage({ params }: Props) {
  const { roomCategoryId } = await params;
  const roomCategoryData =
    await HotelRoomCategoryServerService.getOne(roomCategoryId);
  return (
    <DetailPage
      groups={roomCategoryFieldGroups}
      data={roomCategoryData}
      title={`RoomCategory ${roomCategoryData.name}`}
    />
  );
}
