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
      currencyData={data.currencyData.data}
      languageData={data.languageData.data}
      countryData={data.countryData.data}
      searchTagData={data.searchTagData.data}
      timezoneData={data.timezoneData.data}
      bookingTypeData={data.bookingTypeData.data}
      continentData={data.continentData.data}
    />
  );
}
