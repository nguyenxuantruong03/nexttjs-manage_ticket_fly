"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import FacilityForm from "../components/FacilityForm";
import { useFacilityCreateFormData } from "@/hooks/features/facility/useFacilityCreateFormData";

export default function FacilityCreatePage() {
  const { data, isLoading, error } = useFacilityCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <FacilityForm
      bookingTypeData={data.bookingTypeData}
      facilityCategoryData={data.facilityCategoryData}
    />
  );
}
