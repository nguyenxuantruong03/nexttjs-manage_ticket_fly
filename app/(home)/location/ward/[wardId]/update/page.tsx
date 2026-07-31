"use client";

import { useParams } from "next/navigation";

import WardForm from "../../components/WardForm";
import { useWardUpdateFormData } from "@/hooks/location/ward/useWardUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function WardEditPage() {
  const params = useParams();

  const wardId = params.wardId as string;

  const { data, isLoading, error } = useWardUpdateFormData(wardId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <WardForm 
      initialData={data.initialData} 
      cityData={data.cityData} 
      districtData={data.districtData} 
    />
  );
}
