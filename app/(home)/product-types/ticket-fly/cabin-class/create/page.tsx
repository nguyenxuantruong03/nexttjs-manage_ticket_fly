"use client";

import { useFlyCabinClassCreateFormData } from "@/hooks/product-types/ticket-fly/cabin-class/useFlyCabinClassCreateFormData";

import FlyCabinClassForm from "../components/FlyCabinClassForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyCabinClassCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyCabinClassCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.cabinClass?.message ??
          "Không tải được dữ liệu hạng ghế, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyCabinClassForm />;
};

export default FlyCabinClassCreatePage;
