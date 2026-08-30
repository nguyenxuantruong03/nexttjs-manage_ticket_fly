"use client";

import { useHotelSustainabilityCreateFormData } from "@/hooks/product-types/hotel/hotel-sustainability/useHotelSustainabilityCreateFormData";
import SustainabilityForm from "../components/SustainabilityForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const SustainabilityCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelSustainabilityCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.sustainability?.message ??
          "Không tải được dữ liệu tiêu chí bền vững, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <SustainabilityForm />;
};

export default SustainabilityCreatePage;