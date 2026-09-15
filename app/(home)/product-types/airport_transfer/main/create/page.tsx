"use client";

import { useAirportTransferCreateFormData } from "@/hooks/product-types/airport-transfer/useAirportTransferCreateFormData";
import AirportTransferForm from "../components/AirrportTransferForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function AirportTransferCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useAirportTransferCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Chỉ có 1 nguồn dữ liệu (airportTransfer, gộp từ Promise.all) nên
    // lấy thẳng message của nó.
    return (
      <ErrorPage
        description={
          errors.airportTransfer?.message ??
          "Không tải được dữ liệu airport transfer, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <AirportTransferForm
      searchTagData={data.searchTagData.data}
      addresses={data.addresses.data}
      countries={data.countries.data}
      cities={data.cities.data}
      districts={data.districts.data}
      wards={data.wards.data}
      vehicleTypeData={data.vehicleTypeData.data}
      bookingTypeData={data.bookingTypeData.data}
      fuelTypeData={data.fuelTypeData.data}
      serviceTypeData={data.serviceTypeData.data}
      routeTypeData={data.routeTypeData.data}
      extraFeeTypeData={data.extraFeeTypeData.data}
      priceRuleTypeData={data.priceRuleTypeData.data}
      providerBookingData={data.providerBookingData.data}
      bookingItemTypeData={data.bookingItemTypeData.data}
      extraData={data.extraData.data}
      extraTypeData={data.extraTypeData.data}
      currencyData={data.currencyData.data}
      packageData={data.packageData.data}
      policyData={data.policyData.data}
      policyTypeData={data.policyTypeData.data}
      languageData={data.languageData.data}
      mediaCategoryData={data.mediaCategoryData.data}
      mediaAssetData={data.mediaAssetData.data}
    />
  );
}
