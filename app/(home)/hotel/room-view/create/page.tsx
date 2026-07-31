"use client";

import { useHotelRoomViewCreateFormData } from "@/hooks/hotel/hotel-room-view/useHotelRoomViewCreateFormData";
import RoomViewForm from "../components/RoomViewForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const RoomViewCreatePage = () => {
  const { data, isLoading, error } = useHotelRoomViewCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <RoomViewForm />;
};

export default RoomViewCreatePage;
