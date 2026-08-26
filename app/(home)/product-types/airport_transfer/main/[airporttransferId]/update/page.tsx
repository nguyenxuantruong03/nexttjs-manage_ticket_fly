"use client";

import { useParams } from "next/navigation";

import AirportTransferForm from "../../components/AirrportTransferForm";
import { useAirportTransferUpdateFormData } from "@/hooks/product-types/airport-transfer/useAirportTransferUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function AirportTransferEditPage() {
  const params = useParams();

  const airportTransferId = params.airporttransferId as string;

  const { data, isLoading, error } =
    useAirportTransferUpdateFormData(airportTransferId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <AirportTransferForm
      initialData={data.initialData}
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
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
