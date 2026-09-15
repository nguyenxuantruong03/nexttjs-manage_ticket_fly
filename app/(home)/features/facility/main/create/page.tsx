"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import FacilityForm from "../components/FacilityForm";
import { useFacilityCreateFormData } from "@/hooks/features/facility/useFacilityCreateFormData";

export default function FacilityCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useFacilityCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          errors.facilityCategory?.message ??
          "Không tải được dữ liệu tiện ích, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <FacilityForm
      bookingTypeData={data.bookingTypeData.data}
      facilityCategoryData={data.facilityCategoryData.data}
    />
  );
}
