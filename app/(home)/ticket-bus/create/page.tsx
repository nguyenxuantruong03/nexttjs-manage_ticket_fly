"use client";

import { useTicketBusCreateFormData } from "@/hooks/bus/useTicketBusCreateFormData";
import TicketBusForm from "../components/TicketBusForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function TicketBusCreatePage() {
  const { data, isLoading, error } = useTicketBusCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <TicketBusForm
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
    />
  );
}
