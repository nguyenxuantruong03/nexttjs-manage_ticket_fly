"use client";

import { useHotelRatePlanTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-rate-plan-type/useHotelRatePlanTypeCreateFormData";
import RatePlanTypeForm from "../components/RatePlanTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const RatePlanTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelRatePlanTypeCreateFormData();

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

  return <RatePlanTypeForm />;
};

export default RatePlanTypeCreatePage;
