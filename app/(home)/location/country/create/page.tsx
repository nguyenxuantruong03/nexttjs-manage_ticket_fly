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
      currencyData={data.currencyData.data}
      searchTagData={data.searchTagData.data}
      timezoneData={data.timezoneData.data}
      languageData={data.languageData.data}
      continentData={data.continentData.data}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
}
