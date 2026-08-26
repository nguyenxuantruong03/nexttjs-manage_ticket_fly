"use client";

import { useFlyAirlineUpdateFormData } from "@/hooks/product-types/references/airline/useFlyAirlineUpdateFormData";

import { useParams } from "next/navigation";

import FlyAirlineForm from "../../components/FlyAirlineForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyAirlineEditPage() {
  const params = useParams();

  const airlineId = params.airlineId as string;

  const { data, isLoading, error } = useFlyAirlineUpdateFormData(airlineId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyAirlineForm initialData={data} />;
}
