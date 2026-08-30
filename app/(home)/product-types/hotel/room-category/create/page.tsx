"use client";

import { useHotelRoomCategoryCreateFormData } from "@/hooks/product-types/hotel/hotel-room-category/useHotelRoomCategoryCreateFormData";
import RoomCategoryForm from "../components/RoomCategoryForm";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const RoomCategoryCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelRoomCategoryCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.roomCategory?.message ??
          "Không tải được dữ liệu loại phòng, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <RoomCategoryForm />;
};

export default RoomCategoryCreatePage;
