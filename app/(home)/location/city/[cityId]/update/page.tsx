"use client";

import { useParams } from "next/navigation";

import CityForm from "../../components/CityForm";
import { useCityUpdateFormData } from "@/hooks/location/city/useCityUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CityEditPage() {
  const params = useParams();
  const cityId = params.cityId as string;

  const { data, isLoading, isError, errors, refetch } =
    useCityUpdateFormData(cityId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.city?.message ??
          "Không tải được dữ liệu thành phố, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <CityForm
      initialData={data.initialData}
      currencyData={data.currencyData}
      languageData={data.languageData}
      countryData={data.countryData}
      searchTagData={data.searchTagData}
      timezoneData={data.timezoneData}
      bookingTypeData={data.bookingTypeData}
      continentData={data.continentData}
    />
  );
}
