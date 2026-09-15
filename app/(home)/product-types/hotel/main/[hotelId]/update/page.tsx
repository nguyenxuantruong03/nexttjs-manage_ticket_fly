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
      searchTagData={data.searchTagData.data}
      providerBooking={data.providerBooking.data}
      addresses={data.addresses.data}
      countries={data.countries.data}
      cities={data.cities.data}
      districts={data.districts.data}
      wards={data.wards.data}
      roomCategoryData={data.roomCategoryData.data}
      bathroomTypeData={data.bathroomTypeData.data}
      hotelRoomViewData={data.hotelRoomViewData.data}
      bedTypeData={data.bedTypeData.data}
      roomTypeData={data.roomTypeData.data}
      diningMealTypeData={data.diningMealTypeData.data}
      diningServiceData={data.diningServiceData.data}
      ratePlanTypeData={data.ratePlanTypeData.data}
      mealPlanData={data.mealPlanData.data}
      sustainabilityData={data.sustainabilityData.data}
      accessibilityData={data.accessibilityData.data}
      brandData={data.brandData.data}
      starRatingData={data.starRatingData.data}
      bookingTypeData={data.bookingTypeData.data}
      facilityData={data.facilityData.data}
      facilityCategoryData={data.facilityCategoryData.data}
      packageData={data.packageData.data}
      priceRuleTypeData={data.priceRuleTypeData.data}
      policyData={data.policyData.data}
      policyTypeData={data.policyTypeData.data}
      currencyData={data.currencyData.data}
      extraTypeData={data.extraTypeData.data}
      extraData={data.extraData.data}
      serviceTypeData={data.serviceTypeData.data}
      bookingItemTypeData={data.bookingItemTypeData.data}
      mediaAssetData={data.mediaAssetData.data}
      mediaCategoryData={data.mediaCategoryData.data}
    />
  );
}
