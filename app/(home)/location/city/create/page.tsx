"use client";

import { useCityCreateFormData } from "@/hooks/location/city/useCityCreateFormData";
import CityForm from "../components/CityForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const CityCreatePage = () => {
  const { data, isLoading, isError, refetch } = useCityCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description="Không tải được dữ liệu thành phố, vui lòng thử lại."
        onRetry={refetch}
      />
    );
  }

  return (
    <CityForm
      currencyData={data.currencyData.data}
      languageData={data.languageData.data}
      countryData={data.countryData.data}
      searchTagData={data.searchTagData.data}
      timezoneData={data.timezoneData.data}
      bookingTypeData={data.bookingTypeData.data}
      continentData={data.continentData.data}
    />
  );
};

export default CityCreatePage;
