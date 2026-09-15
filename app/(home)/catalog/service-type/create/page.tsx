"use client";

import ServiceTypeForm from "../components/ServiceTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useServiceTypeCreateFormData } from "@/hooks/catalog/service-type/useServiceTypeCreateFormData";

const ServiceTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useServiceTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại đặt chỗ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <ServiceTypeForm bookingTypeData={data.bookingTypes.data} />;
};

export default ServiceTypeCreatePage;
