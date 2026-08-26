"use client";

import RouteTypeForm from "../components/RouteTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useRouteTypeCreateFormData } from "@/hooks/catalog/route-type/useRouteTypeCreateFormData";

const RouteTypeCreatePage = () => {
  const { data, isLoading, error } = useRouteTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <RouteTypeForm bookingTypeData={data.bookingTypes} />;
};

export default RouteTypeCreatePage;
