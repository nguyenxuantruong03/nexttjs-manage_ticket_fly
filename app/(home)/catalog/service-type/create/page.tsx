"use client";

import ServiceTypeForm from "../components/ServiceTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useServiceTypeCreateFormData } from "@/hooks/catalog/service-type/useServiceTypeCreateFormData";

const ServiceTypeCreatePage = () => {
  const { data, isLoading, error } = useServiceTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <ServiceTypeForm bookingTypeData={data.bookingTypes} />;
};

export default ServiceTypeCreatePage;