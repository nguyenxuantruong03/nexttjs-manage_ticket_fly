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
      airports={data.flyAiport.data}
      searchTagData={data.searchTagData.data}
      addresses={data.addresses.data}
      countries={data.countries.data}
      cities={data.cities.data}
      districts={data.districts.data}
      wards={data.wards.data}
      extraTypeData={data.extraTypeData.data}
      providerBookingData={data.providerBookingData.data}
      serviceTypeData={data.serviceTypeData.data}
      bookingItemTypeData={data.bookingItemTypeData.data}
      bookingTypeData={data.bookingTypeData.data}
      airlineData={data.airlineData.data}
      routeTypeData={data.routeTypeData.data}
      aircraftData={data.aircraftData.data}
      priceRuleTypeData={data.priceRuleTypeData.data}
      cabinClassData={data.cabinClassData.data}
      extraData={data.extraData.data}
      currencyData={data.currencyData.data}
      packageData={data.packageData.data}
      policyData={data.policyData.data}
      policyTypeData={data.policyTypeData.data}
      mediaCategoryData={data.mediaCategoryData.data}
      mediaAssetData={data.mediaAssetData.data}
    />
  );
}
