"use client";

import { useFlyDelayReasonCreateFormData } from "@/hooks/product-types/ticket-fly/delay-reason/useFlyDelayReasonCreateFormData";

import FlyDelayReasonForm from "../components/FlyDelayReasonForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyDelayReasonCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyDelayReasonCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.delayReason?.message ??
          "Không tải được dữ liệu lý do trễ chuyến, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyDelayReasonForm />;
};

export default FlyDelayReasonCreatePage;
