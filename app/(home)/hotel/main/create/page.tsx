"use client";

import { useHotelCreateFormData } from "@/hooks/hotel/useHotelCreateFormData";

import HotelForm from "../components/HotelForm";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function HotelCreatePage() {
  const { data, isLoading, error } = useHotelCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <HotelForm
      searchTagData={data.searchTagData}
      providerBooking={data.providerBooking}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      hotelTypeData={data.hotelTypeData}
      mediaCategoryData={data.mediaCategoryData}
      roomCategoryData={data.roomCategoryData}
      bathroomTypeData={data.bathroomTypeData}
      hotelRoomViewData={data.hotelRoomViewData}
      bedTypeData={data.bedTypeData}
      hotelFacilityData={data.hotelFacilityData}
      facilityCategoryData={data.facilityCategoryData}
      mediaAssestData={data.mediaAssestData}
      roomTypeData={data.roomTypeData}
      diningMealTypeData={data.diningMealTypeData}
      diningServiceData={data.diningServiceData}
      extraTypeData={data.extraTypeData}
      ratePlanTypeData={data.ratePlanTypeData}
      mealPlanData={data.mealPlanData}
      policyData={data.policyData}
      policyTypeData={data.policyTypeData}
      sustainabilityData={data.sustainabilityData}
      accessibilityData={data.accessibilityData}
      brandData={data.brandData}
      starRatingData={data.starRatingData}
    />
  );
}