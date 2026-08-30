"use client";

import { useParams } from "next/navigation";
import RoomTypeForm from "../../components/RoomTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useHotelRoomTypeUpdateFormData } from "@/hooks/product-types/hotel/hotel-room-type/useHotelRoomTypeUpdateFormData";

export default function RoomTypeEditPage() {
  const params = useParams();

  const roomTypeId = params.roomTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelRoomTypeUpdateFormData(roomTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.roomType?.message ??
          "Không tải được dữ liệu loại phòng, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
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
