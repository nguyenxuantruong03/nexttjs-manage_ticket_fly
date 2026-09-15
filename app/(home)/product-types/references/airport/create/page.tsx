"use client";

import { useFlyAirportCreateFormData } from "@/hooks/product-types/references/airport/useFlyAirportCreateFormData";
import FlyAirportForm from "../components/FlyAirportForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyAirportCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyAirportCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.location?.message ??
          errors.flyAirport?.message ??
          "Không tải được dữ liệu sân bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <FlyAirportForm
      addresses={data.addresses.data}
      cities={data.cities.data}
      districts={data.districts.data}
      wards={data.wards.data}
      countries={data.countries.data}
      airportData={data.airportData.data}
    />
  );
};

export default FlyAirportCreatePage;
