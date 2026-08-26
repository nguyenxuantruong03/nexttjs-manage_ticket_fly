"use client";

import { useParams } from "next/navigation";

import TicketFlyForm from "../../components/TicketFlyForm";
import { useTicketFlyUpdateFormData } from "@/hooks/product-types/ticket-fly/useTicketFlyUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function TicketFlyEditPage() {
  const params = useParams();

  const ticketflyId = params.ticketflyId as string;

  const { data, isLoading, error } = useTicketFlyUpdateFormData(ticketflyId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <TicketFlyForm
      initialData={data.initialData}
      airports={data.flyAiport}
      searchTagData={data.searchTagData}
      addresses={data.addresses}
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
