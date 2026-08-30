"use client";

import { useParams } from "next/navigation";
import BedTypeForm from "../../components/BedTypeForm";
import { useHotelBedTypeUpdateFormData } from "@/hooks/product-types/hotel/hotel-bed-type/useHotelBedTypeUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function BedTypeEditPage() {
  const params = useParams();

  const bedTypeId = params.bedTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelBedTypeUpdateFormData(bedTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bedType?.message ??
          "Không tải được dữ liệu loại giường, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <BedTypeForm initialData={data.initialData} />;
}
