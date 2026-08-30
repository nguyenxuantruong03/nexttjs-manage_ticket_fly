"use client";

import { useParams } from "next/navigation";
import RatePlanTypeForm from "../../components/RatePlanTypeForm";
import { useHotelRatePlanTypeUpdateFormData } from "@/hooks/product-types/hotel/hotel-rate-plan-type/useHotelRatePlanTypeUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function RatePlanTypeEditPage() {
  const params = useParams();

  const ratePlanTypeId = params.ratePlanTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelRatePlanTypeUpdateFormData(ratePlanTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.ratePlanType?.message ??
          "Không tải được dữ liệu loại giá phòng, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <RatePlanTypeForm initialData={data.initialData} />;
}
