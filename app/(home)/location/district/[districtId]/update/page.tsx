"use client";

import { useParams } from "next/navigation";

import DistrictForm from "../../components/DistrictForm";
import { useDistrictUpdateFormData } from "@/hooks/location/district/useDistrictUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function DistrictEditPage() {
  const params = useParams();

  const districtId = params.districtId as string;

  const { data, isLoading, error } = useDistrictUpdateFormData(districtId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <DistrictForm
      initialData={data.initialData}
      cityData={data.cityData}
      countryData={data.countryData}
    />
  );
}
