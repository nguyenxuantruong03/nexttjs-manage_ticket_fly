"use client";

import { useTicketFlyCreateFormData } from "@/hooks/ticket-fly/useTicketFlyCreateFormData";
import TicketFlyForm from "../components/TicketFlyForm";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function TicketFlyCreatePage() {
  const { data, isLoading, error } = useTicketFlyCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
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
    />
  );
}
