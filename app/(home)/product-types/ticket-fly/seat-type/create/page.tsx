"use client";

import { useFlySeatTypeCreateFormData } from "@/hooks/product-types/ticket-fly/seat-type/useFlySeatTypeCreateFormData";

import FlySeatTypeForm from "../components/FlySeatTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlySeatTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlySeatTypeCreateFormData();

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

  return <FlySeatTypeForm />;
};

export default FlySeatTypeCreatePage;
