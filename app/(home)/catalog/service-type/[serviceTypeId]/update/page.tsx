"use client";

import { useParams } from "next/navigation";

import ServiceTypeForm from "../../components/ServiceTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useServiceTypeUpdateFormData } from "@/hooks/catalog/service-type/useServiceTypeUpdateFormData";

export default function ServiceTypeEditPage() {
  const params = useParams();

  const serviceTypeId = params.serviceTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useServiceTypeUpdateFormData(serviceTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.serviceType?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại dịch vụ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <ServiceTypeForm
      initialData={data.serviceTypeData}
      bookingTypeData={data.bookingTypes.data}
    />
  );
}
