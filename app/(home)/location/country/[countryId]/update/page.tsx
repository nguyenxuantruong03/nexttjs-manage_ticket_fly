"use client";

import { useParams } from "next/navigation";

import CountryForm from "../../components/CountryForm";
import { useCountryUpdateFormData } from "@/hooks/location/country/useCountryUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CountryEditPage() {
  const params = useParams();
  const countryId = params.countryId as string;

  const { data, isLoading, isError, errors, refetch } =
    useCountryUpdateFormData(countryId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.country?.message ??
          "Không tải được dữ liệu quốc gia, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <CountryForm
      initialData={data.initialData}
      currencyData={data.currencyData}
      searchTagData={data.searchTagData}
      timezoneData={data.timezoneData}
      languageData={data.languageData}
      continentData={data.continentData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
