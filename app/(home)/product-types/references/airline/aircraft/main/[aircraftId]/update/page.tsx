"use client";

import { useFlyAircraftUpdateFormData } from "@/hooks/product-types/references/airline/aircraft/useFlyAircraftUpdateFormData";

import { useParams } from "next/navigation";

import FlyAircraftForm from "../../components/FlyAircraftForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

export default function FlyAircraftEditPage() {
  const params = useParams();

  const aircraftId = params.aircraftId as string;

  const { data, isLoading, error } = useFlyAircraftUpdateFormData(aircraftId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyAircraftForm initialData={data.initialData} />;
}
