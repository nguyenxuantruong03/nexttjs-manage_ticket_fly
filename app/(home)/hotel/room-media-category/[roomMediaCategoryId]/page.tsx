import { DetailPage } from "@/components/detail/detail-page";
import { roomMediaCategoryFieldGroups } from "../components/step/field-groups";
import { HotelRoomMediaCategoryServerService } from "@/services/hotel/hotel-room-media-category/server";

type Props = {
  params: Promise<{
    roomMediaCategoryId: string;
  }>;
};

export default async function RoomMediaCategoryDetailPage({ params }: Props) {
  const { roomMediaCategoryId } = await params;
  const roomMediaCategoryData =
    await HotelRoomMediaCategoryServerService.getOne(roomMediaCategoryId);
  return (
    <DetailPage
      groups={roomMediaCategoryFieldGroups}
      data={roomMediaCategoryData}
      title={`RoomMediaCategory ${roomMediaCategoryData.name}`}
    />
  );
}
