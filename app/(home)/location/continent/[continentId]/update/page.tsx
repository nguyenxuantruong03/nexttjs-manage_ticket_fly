"use client";

import { useParams } from "next/navigation";

import ContinentForm from "../../components/ContinentForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useContinent } from "@/hooks/location/country/continent";

export default function ContinentEditPage() {
  const params = useParams();

  const continentId = params.continentId as string;

  const { data, isLoading, error } = useContinent(continentId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <ContinentForm initialData={data} />;
}
