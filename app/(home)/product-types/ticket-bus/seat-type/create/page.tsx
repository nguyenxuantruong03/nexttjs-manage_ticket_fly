"use client";

import BusSeatTypeForm from "../components/BusSeatTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useBusSeatTypeCreateFormData } from "@/hooks/product-types/bus/seat-type/useSeatTypeCreateFormData";

const BusSeatTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useBusSeatTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.seatType?.message ??
          "Không tải được dữ liệu loại ghế, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <BusSeatTypeForm />;
};

export default BusSeatTypeCreatePage;
