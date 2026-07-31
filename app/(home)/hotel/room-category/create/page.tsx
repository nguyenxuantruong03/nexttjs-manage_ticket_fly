"use client";

import { useHotelRoomCategoryCreateFormData } from "@/hooks/hotel/hotel-room-category/useHotelRoomCategoryCreateFormData";
import RoomCategoryForm from "../components/RoomCategoryForm";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const RoomCategoryCreatePage = () => {
  const { data, isLoading, error } = useHotelRoomCategoryCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <RoomCategoryForm />;
};

export default RoomCategoryCreatePage;
