"use client";

import FacilityCategoryForm from "../components/FacilityCategoryForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useFacilityCategoryCreateFormData } from "@/hooks/features/facility-category/useFacilityCategoryCreateFormData";

const FacilityCategoryCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFacilityCategoryCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu danh mục tiện ích, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FacilityCategoryForm bookingTypeData={data.bookingTypeData.data} />;
};

export default FacilityCategoryCreatePage;
