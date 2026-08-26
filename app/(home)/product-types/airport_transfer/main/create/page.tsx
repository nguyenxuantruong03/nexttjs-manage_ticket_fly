"use client";

import { useAirportTransferCreateFormData } from "@/hooks/product-types/airport-transfer/useAirportTransferCreateFormData";
import AirportTransferForm from "../components/AirrportTransferForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function AirportTransferCreatePage() {
  const { data, isLoading, error } = useAirportTransferCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <AirportTransferForm
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      searchTagData={data.searchTagData}
      vehicleTypeData={data.vehicleTypeData}
      bookingTypeData={data.bookingTypeData}
      fuelTypeData={data.fuelTypeData}
      serviceTypeData={data.serviceTypeData}
      routeTypeData={data.routeTypeData}
      extraFeeTypeData={data.extraFeeTypeData}
      priceRuleTypeData={data.priceRuleTypeData}
      providerBookingData={data.providerBookingData}
      bookingItemTypeData={data.bookingItemTypeData}
      extraData={data.extraData}
      extraTypeData={data.extraTypeData}
      currencyData={data.currencyData}
      packageData={data.packageData}
      policyData={data.policyData}
      policyTypeData={data.policyTypeData}
      languageData={data.languageData}
    />
  );
}
