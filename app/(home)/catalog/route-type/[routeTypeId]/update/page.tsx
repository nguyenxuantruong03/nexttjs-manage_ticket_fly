"use client";

import { useParams } from "next/navigation";

import RouteTypeForm from "../../components/RouteTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useRouteTypeUpdateFormData } from "@/hooks/catalog/route-type/useRouteTypeUpdateFormData";

export default function RouteTypeEditPage() {
  const params = useParams();

  const routeTypeId = params.routeTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useRouteTypeUpdateFormData(routeTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Ưu tiên hiện message của routeType trước vì đó là dữ liệu chính
    // của trang này, fallback sang bookingType rồi mới đến message mặc định.
    return (
      <ErrorPage
        description={
          errors.routeType?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại tuyến, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <RouteTypeForm
      initialData={data.routeTypeData}
      bookingTypeData={data.bookingTypes.data}
    />
  );
}
