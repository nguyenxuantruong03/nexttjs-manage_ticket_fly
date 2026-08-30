"use client";

import { useHotelRoomViewCreateFormData } from "@/hooks/product-types/hotel/hotel-room-view/useHotelRoomViewCreateFormData";
import RoomViewForm from "../components/RoomViewForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const RoomViewCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelRoomViewCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.roomView?.message ??
          "Không tải được dữ liệu loại view phòng, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <RoomViewForm />;
};

export default RoomViewCreatePage;
