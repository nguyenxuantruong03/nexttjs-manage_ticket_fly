"use client";

import { useParams } from "next/navigation";

import ServiceTypeForm from "../../components/ServiceTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useServiceTypeUpdateFormData } from "@/hooks/catalog/service-type/useServiceTypeUpdateFormData";

export default function ServiceTypeEditPage() {
  const params = useParams();

  const serviceTypeId = params.serviceTypeId as string;

  const { data, isLoading, error } =
    useServiceTypeUpdateFormData(serviceTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <ServiceTypeForm
      initialData={data.serviceTypeData}
      bookingTypeData={data.bookingTypes}
    />
  );
}