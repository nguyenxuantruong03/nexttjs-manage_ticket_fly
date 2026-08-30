"use client";

import { useCarrentalCreateFormData } from "@/hooks/product-types/car-rental/useCarrentalCreateFormData";
import CarrentalForm from "../components/CarrentalForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CarrentalCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useCarrentalCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.carRental?.message ??
          "Không tải được dữ liệu xe cho thuê, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <CarrentalForm
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      bookingTypeData={data.bookingTypeData}
      vehicleTypeData={data.vehicleTypeData}
      priceRuleTypeData={data.priceRuleTypeData}
      insuranceBenefitTypeData={data.insuranceBenefitTypeData}
      insuranceTypeData={data.insuranceTypeData}
      extraTypeData={data.extraTypeData}
      extraData={data.extraData}
      providerBookingData={data.providerBookingData}
      serviceTypeData={data.serviceTypeData}
      bookingItemTypeData={data.bookingItemTypeData}
      packageData={data.packageData}
      currencyData={data.currencyData}
      policyData={data.policyData}
      policyTypeData={data.policyTypeData}
      documentTypeData={data.documentTypeData}
      facilityData={data.facilityData}
      facilityCategoryData={data.facilityCategoryData}
    />
  );
}
