"use client";

import RoomTypeForm from "../components/RoomTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useHotelRoomTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-room-type/useHotelRoomTypeCreateFormData";

const RoomTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelRoomTypeCreateFormData();

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
      roomCategoryData={data.roomCategories.data}
      roomViewData={data.roomViews.data}
      bathroomTypeData={data.bathroomTypes.data}
    />
  );
};

export default RoomTypeCreatePage;
