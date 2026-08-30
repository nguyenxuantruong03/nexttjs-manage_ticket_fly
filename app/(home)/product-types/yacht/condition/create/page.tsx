"use client";

import YachtConditionForm from "../components/YachtConditionForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useYachtConditionCreateFormData } from "@/hooks/product-types/yacht/condition/useYachtConditionCreateFormData";

const YachtConditionCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useYachtConditionCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.condition?.message ??
          "Không tải được dữ liệu tình trạng du thuyền, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <YachtConditionForm />;
};

export default YachtConditionCreatePage;
