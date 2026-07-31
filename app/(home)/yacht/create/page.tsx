"use client";

import { useYachtCreateFormData } from "@/hooks/yacht/useYachtCreateFormData";
import YachtForm from "../components/YachtForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function YachtCreatePage() {
  const { data, isLoading, error } = useYachtCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <YachtForm
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
    />
  );
}
