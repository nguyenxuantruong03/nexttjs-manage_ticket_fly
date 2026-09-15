"use client";

import { useParams } from "next/navigation";

import FacilityCategoryForm from "../../components/FacilityCategoryForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useFacilityCategoryUpdateFormData } from "@/hooks/features/facility-category/useFacilityCategoryUpdateFormData";

export default function FacilityCategoryEditPage() {
  const params = useParams();
  const facilityCategoryId = params.facilityCategoryId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFacilityCategoryUpdateFormData(facilityCategoryId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.facilityCategory?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu danh mục tiện ích, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <FacilityCategoryForm
      initialData={data.facilityCategoryData}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
}
