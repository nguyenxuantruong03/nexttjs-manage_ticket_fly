"use client";

import { useParams } from "next/navigation";

import HotelForm from "../../components/HotelForm";
import { useHotelUpdateFormData } from "@/hooks/product-types/hotel/useHotelUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function HotelEditPage() {
  const params = useParams();

  const hotelId = params.hotelId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelUpdateFormData(hotelId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.location?.message ??
          errors.hotel?.message ??
          "Không tải được dữ liệu khách sạn, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <HotelForm
      initialData={data.initialData}
      searchTagData={data.searchTagData}
      providerBooking={data.providerBooking}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      roomCategoryData={data.roomCategoryData}
      bathroomTypeData={data.bathroomTypeData}
      hotelRoomViewData={data.hotelRoomViewData}
      bedTypeData={data.bedTypeData}
      roomTypeData={data.roomTypeData}
      diningMealTypeData={data.diningMealTypeData}
      diningServiceData={data.diningServiceData}
      ratePlanTypeData={data.ratePlanTypeData}
      mealPlanData={data.mealPlanData}
      sustainabilityData={data.sustainabilityData}
      accessibilityData={data.accessibilityData}
      brandData={data.brandData}
      starRatingData={data.starRatingData}
      bookingTypeData={data.bookingTypeData}
      facilityData={data.facilityData}
      facilityCategoryData={data.facilityCategoryData}
      packageData={data.packageData}
      priceRuleTypeData={data.priceRuleTypeData}
      policyData={data.policyData}
      policyTypeData={data.policyTypeData}
      currencyData={data.currencyData}
      extraTypeData={data.extraTypeData}
      extraData={data.extraData}
      serviceTypeData={data.serviceTypeData}
      bookingItemTypeData={data.bookingItemTypeData}
    />
  );
}
