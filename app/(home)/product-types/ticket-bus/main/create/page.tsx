"use client";

import { useTicketBusCreateFormData } from "@/hooks/product-types/bus/useTicketBusCreateFormData";
import TicketBusForm from "../components/TicketBusForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function TicketBusCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useTicketBusCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.ticketBus?.message ??
          "Không tải được dữ liệu vé xe bus, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <TicketBusForm
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      vehicleTypeData={data.vehicleTypeData}
      bookingTypeData={data.bookingTypeData}
      seatTypeData={data.seatTypeData}
      currencyData={data.currencyData}
      packageData={data.packageData}
      extraTypeData={data.extraTypeData}
      extraData={data.extraData}
      policyTypeData={data.policyTypeData}
      policyData={data.policyData}
      extraFeeTypeData={data.extraFeeTypeData}
      priceRuleTypeData={data.priceRuleTypeData}
      facilityCategoryData={data.facilityCategoryData}
      facilityData={data.facilityData}
      fuelTypeData={data.fuelTypeData}
      routeTypeData={data.routeTypeData}
      providerBookingData={data.providerBookingData}
      bookingItemTypeData={data.bookingItemTypeData}
      serviceTypeData={data.serviceTypeData}
    />
  );
}
