"use client";

import { useTicketFlyCreateFormData } from "@/hooks/product-types/ticket-fly/useTicketFlyCreateFormData";
import TicketFlyForm from "../components/TicketFlyForm";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function TicketFlyCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useTicketFlyCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.ticketFly?.message ??
          errors.location?.message ??
          "Không tải được dữ liệu vé máy bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <TicketFlyForm
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      airports={data.flyAiport}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      extraTypeData={data.extraTypeData}
      providerBookingData={data.providerBookingData}
      serviceTypeData={data.serviceTypeData}
      bookingItemTypeData={data.bookingItemTypeData}
      bookingTypeData={data.bookingTypeData}
      airlineData={data.airlineData}
      routeTypeData={data.routeTypeData}
      aircraftData={data.aircraftData}
      priceRuleTypeData={data.priceRuleTypeData}
      cabinClassData={data.cabinClassData}
      extraData={data.extraData}
      currencyData={data.currencyData}
      packageData={data.packageData}
      policyData={data.policyData}
      policyTypeData={data.policyTypeData}
    />
  );
}
