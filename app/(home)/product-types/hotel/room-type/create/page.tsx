"use client";

import RoomTypeForm from "../components/RoomTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useHotelRoomTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-room-type/useHotelRoomTypeCreateFormData";

const RoomTypeCreatePage = () => {
  const { data, isLoading, error } = useHotelRoomTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <RoomTypeForm
      roomCategoryData={data.roomCategories}
      roomViewData={data.roomViews}
      bathroomTypeData={data.bathroomTypes}
    />
  );
};

export default RoomTypeCreatePage;
