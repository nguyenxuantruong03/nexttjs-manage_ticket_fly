"use client";

import { useYachtCreateFormData } from "@/hooks/product-types/yacht/useYachtCreateFormData";
import YachtForm from "../components/YachtForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function YachtCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useYachtCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.yacht?.message ??
          errors.location?.message ??
          "Không tải được dữ liệu du thuyền, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <YachtForm
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      bookingTypeData={data.bookingTypeData}
      fuelTypeData={data.fuelTypeData}
      conditionData={data.conditionData}
      extraFeeTypeData={data.extraFeeTypeData}
      crewRoleData={data.crewRoleData}
      facilityData={data.facilityData}
      facilityCategoryData={data.facilityCategoryData}
      providerBookingData={data.providerBookingData}
      serviceTypeData={data.serviceTypeData}
      bookingItemTypeData={data.bookingItemTypeData}
      routeTypeData={data.routeTypeData}
      packageData={data.packageData}
      currencyData={data.currencyData}
      policyData={data.policyData}
      policyTypeData={data.policyTypeData}
      extraData={data.extraData}
      extraTypeData={data.extraTypeData}
    />
  );
}
