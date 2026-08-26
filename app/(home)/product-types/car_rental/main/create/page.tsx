"use client";

import { useCarrentalCreateFormData } from "@/hooks/product-types/car-rental/useCarrentalCreateFormData";
import CarrentalForm from "../components/CarrentalForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CarrentalCreatePage() {
  const { data, isLoading, error } = useCarrentalCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
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
