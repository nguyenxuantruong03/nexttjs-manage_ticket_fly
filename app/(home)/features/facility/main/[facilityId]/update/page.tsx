"use client";

import { useParams } from "next/navigation";

import FacilityForm from "../../components/FacilityForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useFacilityUpdateFormData } from "@/hooks/features/facility/useFacilityUpdateFormData";

export default function FacilityEditPage() {
  const params = useParams();

  const facilityId = params.facilityId as string;

  const { data, isLoading, error } = useFacilityUpdateFormData(facilityId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <FacilityForm
      initialData={data.facilityData}
      bookingTypeData={data.bookingTypeData}
      facilityCategoryData={data.facilityCategoryData}
    />
  );
}
