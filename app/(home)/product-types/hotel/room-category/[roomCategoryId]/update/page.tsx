"use client";

import { useParams } from "next/navigation";
import RoomCategoryForm from "../../components/RoomCategoryForm";
import { useHotelRoomCategoryUpdateFormData } from "@/hooks/product-types/hotel/hotel-room-category/useHotelRoomCategoryUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function RoomCategoryEditPage() {
  const params = useParams();

  const roomCategoryId = params.roomCategoryId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelRoomCategoryUpdateFormData(roomCategoryId);

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

  return <RoomCategoryForm initialData={data.initialData} />;
}
