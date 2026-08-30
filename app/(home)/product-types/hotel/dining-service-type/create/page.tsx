"use client";

import { useHotelDiningServiceTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-dining-service-type/useHotelDiningServiceTypeCreateFormData";
import DiningServiceTypeForm from "../components/DiningServiceTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const DiningServiceTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelDiningServiceTypeCreateFormData();

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

  return <DiningServiceTypeForm />;
};

export default DiningServiceTypeCreatePage;
