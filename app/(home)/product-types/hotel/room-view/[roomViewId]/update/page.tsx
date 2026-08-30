"use client";

import { useParams } from "next/navigation";
import RoomViewForm from "../../components/RoomViewForm";
import { useHotelRoomViewUpdateFormData } from "@/hooks/product-types/hotel/hotel-room-view/useHotelRoomViewUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function RoomViewEditPage() {
  const params = useParams();

  const roomViewId = params.roomViewId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelRoomViewUpdateFormData(roomViewId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.roomView?.message ??
          "Không tải được dữ liệu view phòng, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <RoomViewForm initialData={data.initialData} />;
}
