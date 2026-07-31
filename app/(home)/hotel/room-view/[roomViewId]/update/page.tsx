"use client";

import { useParams } from "next/navigation";
import RoomViewForm from "../../components/RoomViewForm";
import { useHotelRoomViewUpdateFormData } from "@/hooks/hotel/hotel-room-view/useHotelRoomViewUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function RoomViewEditPage() {
  const params = useParams();

  const roomViewId = params.roomViewId as string;

  const { data, isLoading, error } = useHotelRoomViewUpdateFormData(roomViewId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <RoomViewForm initialData={data.initialData} />;
}
