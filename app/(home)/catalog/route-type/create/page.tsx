"use client";

import RouteTypeForm from "../components/RouteTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useRouteTypeCreateFormData } from "@/hooks/catalog/route-type/useRouteTypeCreateFormData";

const RouteTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useRouteTypeCreateFormData();

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

  return <RouteTypeForm bookingTypeData={data.bookingTypes} />;
};

export default RouteTypeCreatePage;
