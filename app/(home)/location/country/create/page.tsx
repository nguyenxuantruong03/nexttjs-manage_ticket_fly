"use client";

import { useCountryCreateFormData } from "@/hooks/location/country/useCountryCreateFormData";
import CountryForm from "../components/CountryForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CountryCreatePage() {
  const { data, isLoading, error } = useCountryCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
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
