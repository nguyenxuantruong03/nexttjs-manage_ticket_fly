"use client";

import { useParams } from "next/navigation";

import TicketBusForm from "../../components/TicketBusForm";
import { useTicketBusUpdateFormData } from "@/hooks/bus/useTicketBusUpdateFormData";
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
    />
  );
}
