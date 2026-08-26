"use client";

import { useParams } from "next/navigation";

import RouteTypeForm from "../../components/RouteTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useRouteTypeUpdateFormData } from "@/hooks/catalog/route-type/useRouteTypeUpdateFormData";

export default function RouteTypeEditPage() {
  const params = useParams();

  const routeTypeId = params.routeTypeId as string;

  const { data, isLoading, error } = useRouteTypeUpdateFormData(routeTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <RouteTypeForm
      initialData={data.routeTypeData}
      bookingTypeData={data.bookingTypes}
    />
  );
}
