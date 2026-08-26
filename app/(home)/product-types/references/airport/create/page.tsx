"use client";

import { useFlyAirportCreateFormData } from "@/hooks/product-types/references/airport/useFlyAirportCreateFormData";
import FlyAirportForm from "../components/FlyAirportForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyAirportCreatePage = () => {
  const { data, isLoading, error } = useFlyAirportCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <FlyAirportForm
      addresses={data.addresses}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      countries={data.countries}
    />
  );
};

export default FlyAirportCreatePage;
