"use client";

import { useParams } from "next/navigation";
import RoomTypeForm from "../../components/RoomTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useHotelRoomTypeUpdateFormData } from "@/hooks/hotel/hotel-room-type/useHotelRoomTypeUpdateFormData";

export default function RoomTypeEditPage() {
  const params = useParams();

  const roomTypeId = params.roomTypeId as string;

  const { data, isLoading, error } = useHotelRoomTypeUpdateFormData(roomTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <RoomTypeForm
      initialData={data.initialData}
      roomCategoryData={data.roomCategories}
      roomViewData={data.roomViews}
      bathroomTypeData={data.bathroomTypes}
    />
  );
}
