"use client";

import { useDistrictCreateFormData } from "@/hooks/location/district/useDistrictCreateFormData";
import DistrictForm from "../components/DistrictForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function DistrictCreatePage() {
  const { data, isLoading, error } = useDistrictCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <DistrictForm cityData={data.cityData} countryData={data.countryData} />
  );
}
