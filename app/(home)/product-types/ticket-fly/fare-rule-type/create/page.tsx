"use client";

import { useFlyFareRuleTypeCreateFormData } from "@/hooks/product-types/ticket-fly/fare-rule-type/useFlyFareRuleTypeCreateFormData";

import FlyFareRuleTypeForm from "../components/FlyFareRuleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyFareRuleTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyFareRuleTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.fareRuleType?.message ??
          "Không tải được dữ liệu loại quy tắc giá vé, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyFareRuleTypeForm />;
};

export default FlyFareRuleTypeCreatePage;
