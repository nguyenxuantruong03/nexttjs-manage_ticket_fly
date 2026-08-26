"use client";

import { useParams } from "next/navigation";

import PlaceTypeForm from "../../components/PlaceTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { usePlaceType } from "@/hooks/location/place/place-type";

export default function PlaceTypeEditPage() {
  const params = useParams();

  const placeTypeId = params.placeTypeId as string;

  const { data, isLoading, error } = usePlaceType(placeTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <PlaceTypeForm initialData={data} />;
}
