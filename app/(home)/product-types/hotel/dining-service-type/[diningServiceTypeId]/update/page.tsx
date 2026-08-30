"use client";

import { useParams } from "next/navigation";
import DiningServiceTypeForm from "../../components/DiningServiceTypeForm";
import { useHotelDiningServiceTypeUpdateFormData } from "@/hooks/product-types/hotel/hotel-dining-service-type/useHotelDiningServiceTypeUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function DiningServiceTypeEditPage() {
  const params = useParams();

  const diningServiceTypeId = params.diningServiceTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelDiningServiceTypeUpdateFormData(diningServiceTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.diningServiceType?.message ??
          "Không tải được dữ liệu loại dịch vụ ăn uống, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <DiningServiceTypeForm initialData={data.initialData} />;
}
