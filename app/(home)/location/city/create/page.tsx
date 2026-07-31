"use client";

import { useCityCreateFormData } from "@/hooks/location/city/useCityCreateFormData";
import CityForm from "../components/CityForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const CityCreatePage = () => {
  const { data, isLoading, error } = useCityCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <CityForm
      currencyData={data.currencyData}
      languageData={data.languageData}
      countryData={data.countryData}
      searchTagData={data.searchTagData}
      timezoneData={data.timezoneData}
    />
  );
};

export default CityCreatePage;
