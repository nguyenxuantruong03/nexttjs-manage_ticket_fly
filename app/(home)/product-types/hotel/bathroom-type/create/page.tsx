"use client";

import { useHotelBathroomTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-bathroom-type/useHotelBathroomTypeCreateFormData";
import BathroomTypeForm from "../components/BathroomTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const BathroomTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelBathroomTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bathroomType?.message ??
          "Không tải được dữ liệu loại phòng tắm, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <BathroomTypeForm />;
};

export default BathroomTypeCreatePage;
