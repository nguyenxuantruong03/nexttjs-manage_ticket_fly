"use client";

import { useParams } from "next/navigation";

import FacilityForm from "../../components/FacilityForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useFacilityUpdateFormData } from "@/hooks/features/facility/useFacilityUpdateFormData";

export default function FacilityEditPage() {
  const params = useParams();
  const facilityId = params.facilityId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFacilityUpdateFormData(facilityId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.facility?.message ??
          errors.facilityCategory?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu tiện ích, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <FacilityForm
      initialData={data.facilityData}
      bookingTypeData={data.bookingTypeData}
      facilityCategoryData={data.facilityCategoryData}
    />
  );
}
