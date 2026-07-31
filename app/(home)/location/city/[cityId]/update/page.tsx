"use client";

import { useParams } from "next/navigation";

import CityForm from "../../components/CityForm";
import { useCityUpdateFormData } from "@/hooks/location/city/useCityUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CityEditPage() {
  const params = useParams();

  const cityId = params.cityId as string;

  const { data, isLoading, error } = useCityUpdateFormData(cityId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <CityForm
      initialData={data.initialData}
      currencyData={data.currencyData}
      languageData={data.languageData}
      countryData={data.countryData}
      searchTagData={data.searchTagData}
      timezoneData={data.timezoneData}
    />
  );
}
