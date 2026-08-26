"use client";

import { useParams } from "next/navigation";

import TicketBusForm from "../../components/TicketBusForm";
import { useTicketBusUpdateFormData } from "@/hooks/product-types/bus/useTicketBusUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function TicketBusEditPage() {
  const params = useParams();

  const ticketbusId = params.ticketbusId as string;

  const { data, isLoading, error } = useTicketBusUpdateFormData(ticketbusId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <TicketBusForm
      initialData={data.initialData}
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
