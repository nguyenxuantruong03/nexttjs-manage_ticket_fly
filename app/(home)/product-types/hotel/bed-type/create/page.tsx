"use client";

import { useHotelBedTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-bed-type/useHotelBedTypeCreateFormData";
import BedTypeForm from "../components/BedTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const BedTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelBedTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bedType?.message ??
          "Không tải được dữ liệu loại giường, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <BedTypeForm />;
};

export default BedTypeCreatePage;
