"use client";

import { useParams } from "next/navigation";

import TaxRuleForm from "../../components/TaxRuleForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useTaxRuleUpdateFormData } from "@/hooks/commerce/compliance-legal/tax-rule/useTaxRuleUpdateFormData";

export default function TaxRuleEditPage() {
  const params = useParams();

  const taxRuleId = params.taxRuleId as string;

  const { data, isLoading, isError, errors, refetch } =
    useTaxRuleUpdateFormData(taxRuleId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Có 2 nguồn lỗi khả dĩ (taxRule, bookingType) - ưu tiên hiện
    // message của taxRule trước vì đó là dữ liệu chính của trang này.

    return (
      <ErrorPage
        description={
          errors.taxRule?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu quy tắc thuế, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <TaxRuleForm
      initialData={data.taxRuleData}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
}
