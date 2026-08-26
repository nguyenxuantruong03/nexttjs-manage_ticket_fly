"use client";

import { useParams } from "next/navigation";
import RoomCategoryForm from "../../components/RoomCategoryForm";
import { useHotelRoomCategoryUpdateFormData } from "@/hooks/product-types/hotel/hotel-room-category/useHotelRoomCategoryUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function RoomCategoryEditPage() {
  const params = useParams();

  const roomCategoryId = params.roomCategoryId as string;

  const { data, isLoading, error } =
    useHotelRoomCategoryUpdateFormData(roomCategoryId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <RoomCategoryForm initialData={data.initialData} />;
}
