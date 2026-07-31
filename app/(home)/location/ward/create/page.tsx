"use client";

import { useWardCreateFormData } from "@/hooks/location/ward/useWardCreateFormData";
import WardForm from "../components/WardForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function WardCreatePage() {
  const { data, isLoading, error } = useWardCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <WardForm cityData={data.cityData} districtData={data.districtData} />;
}
