"use client";

import TaxRuleForm from "../components/TaxRuleForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useTaxRuleCreateFormData } from "@/hooks/commerce/compliance-legal/tax-rule/useTaxRuleCreateFormData";

const TaxRuleCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useTaxRuleCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại đặt chỗ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <TaxRuleForm bookingTypeData={data.bookingTypeData} />;
};

export default TaxRuleCreatePage;
