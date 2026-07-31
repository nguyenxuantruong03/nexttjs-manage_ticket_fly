import { DetailPage } from "@/components/detail/detail-page";
import { roomViewFieldGroups } from "../components/step/field-groups";
import { HotelRoomViewServerService } from "@/services/hotel/hotel-room-view/server";

type Props = {
  params: Promise<{
    roomViewId: string;
  }>;
};

export default async function RoomViewDetailPage({ params }: Props) {
  const { roomViewId } = await params;
  const roomViewData =
    await HotelRoomViewServerService.getOne(roomViewId);
  return (
    <DetailPage
      groups={roomViewFieldGroups}
      data={roomViewData}
      title={`RoomView ${roomViewData.name}`}
    />
  );
}
