"use client";

import { useFlyAircraftTypeUpdateFormData } from "@/hooks/product-types/references/airline/aircraft/aircraft-type/useFlyAircraftTypeUpdateFormData";

import { useParams } from "next/navigation";

import FlyAircraftTypeForm from "../../components/FlyAircraftTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

export default function FlyAircraftTypeEditPage() {
  const params = useParams();

  const aircraftTypeId = params.aircraftTypeId as string;

  const { data, isLoading, error } =
    useFlyAircraftTypeUpdateFormData(aircraftTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <FlyAircraftTypeForm initialData={data.initialData} />
  );
}