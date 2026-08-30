"use client";

import { useHotelBrandCreateFormData } from "@/hooks/product-types/hotel/hotel-brand/useHotelBrandCreateFormData";
import HotelBrandForm from "../components/BrandForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const HotelBrandCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelBrandCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.brand?.message ??
          "Không tải được dữ liệu thương hiệu, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <HotelBrandForm />;
};

export default HotelBrandCreatePage;
