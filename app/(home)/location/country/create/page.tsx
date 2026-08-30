"use client";

import { useCountryCreateFormData } from "@/hooks/location/country/useCountryCreateFormData";
import CountryForm from "../components/CountryForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CountryCreatePage() {
  const { data, isLoading, isError, refetch } = useCountryCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description="Không tải được dữ liệu quốc gia, vui lòng thử lại."
        onRetry={refetch}
      />
    );
  }

  return (
    <CountryForm
      currencyData={data.currencyData}
      searchTagData={data.searchTagData}
      timezoneData={data.timezoneData}
      languageData={data.languageData}
      continentData={data.continentData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
