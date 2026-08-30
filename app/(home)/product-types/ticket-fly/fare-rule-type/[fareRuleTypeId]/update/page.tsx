"use client";

import { useFlyFareRuleTypeUpdateFormData } from "@/hooks/product-types/ticket-fly/fare-rule-type/useFlyFareRuleTypeUpdateFormData";

import { useParams } from "next/navigation";

import FlyFareRuleTypeForm from "../../components/FlyFareRuleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyFareRuleTypeEditPage() {
  const params = useParams();

  const fareRuleTypeId = params.fareRuleTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlyFareRuleTypeUpdateFormData(fareRuleTypeId);

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

  return <FlyFareRuleTypeForm initialData={data.initialData} />;
}
