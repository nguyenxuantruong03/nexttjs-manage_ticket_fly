"use client";

import { useParams } from "next/navigation";
import FacilityForm from "../../components/FacilityForm";
import { useHotelFacilityUpdateFormData } from "@/hooks/hotel/hotel-facility/useHotelFacilityUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FacilityEditPage() {
  const params = useParams();

  const facilityId = params.facilityId as string;

  const { data, isLoading, error } = useHotelFacilityUpdateFormData(facilityId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <FacilityForm
      initialData={data.initialData}
      hotelFacilityCategoryData={data.facilityCategory}
    />
  );
}
