"use client";

import { useHotelFacilityCreateFormData } from "@/hooks/hotel/hotel-facility/useHotelFacilityCreateFormData";
import FacilityForm from "../components/FacilityForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FacilityCreatePage = () => {
  const { data, isLoading, error } = useHotelFacilityCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FacilityForm hotelFacilityCategoryData={data.facilityCategory} />;
};

export default FacilityCreatePage;
