"use client";

import { useParams } from "next/navigation";

import TicketBusForm from "../../components/TicketBusForm";
import { useTicketBusUpdateFormData } from "@/hooks/product-types/bus/useTicketBusUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function TicketBusEditPage() {
  const params = useParams();

  const ticketbusId = params.ticketbusId as string;

  const { data, isLoading, isError, errors, refetch } =
    useTicketBusUpdateFormData(ticketbusId);

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
      initialData={data.initialData}
      searchTagData={data.searchTagData.data}
      addresses={data.addresses.data}
      countries={data.countries.data}
      cities={data.cities.data}
      districts={data.districts.data}
      wards={data.wards.data}
      vehicleTypeData={data.vehicleTypeData.data}
      bookingTypeData={data.bookingTypeData.data}
      seatTypeData={data.seatTypeData.data}
      currencyData={data.currencyData.data}
      packageData={data.packageData.data}
      extraTypeData={data.extraTypeData.data}
      extraData={data.extraData.data}
      policyTypeData={data.policyTypeData.data}
      policyData={data.policyData.data}
      extraFeeTypeData={data.extraFeeTypeData.data}
      priceRuleTypeData={data.priceRuleTypeData.data}
      facilityCategoryData={data.facilityCategoryData.data}
      facilityData={data.facilityData.data}
      fuelTypeData={data.fuelTypeData.data}
      routeTypeData={data.routeTypeData.data}
      providerBookingData={data.providerBookingData.data}
      bookingItemTypeData={data.bookingItemTypeData.data}
      serviceTypeData={data.serviceTypeData.data}
      mediaCategoryData={data.mediaCategoryData.data}
      mediaAssetData={data.mediaAssetData.data}
    />
  );
}
