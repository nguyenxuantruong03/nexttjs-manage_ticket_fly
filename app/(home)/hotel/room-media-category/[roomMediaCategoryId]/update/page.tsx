"use client";

import { useParams } from "next/navigation";
import RoomMediaCategoryForm from "../../components/RoomMediaCategoryForm";
import { useHotelRoomMediaCategoryUpdateFormData } from "@/hooks/hotel/hotel-room-media-category/useHotelRoomMediaCategoryUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function RoomMediaCategoryEditPage() {
  const params = useParams();

  const roomMediaCategoryId = params.roomMediaCategoryId as string;

  const { data, isLoading, error } =
    useHotelRoomMediaCategoryUpdateFormData(roomMediaCategoryId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <RoomMediaCategoryForm initialData={data.initialData} />;
}
