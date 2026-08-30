"use client";

import { useParams } from "next/navigation";
import BathRoomTypeForm from "../../components/BathroomTypeForm";
import { useHotelBathroomTypeUpdateFormData } from "@/hooks/product-types/hotel/hotel-bathroom-type/useHotelBathroomTypeUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function BathRoomTypeEditPage() {
  const params = useParams();

  const bathroomTypeId = params.bathroomTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelBathroomTypeUpdateFormData(bathroomTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bathroomType?.message ??
          "Không tải được dữ liệu loại phòng tắm, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <BathRoomTypeForm initialData={data.initialData} />;
}