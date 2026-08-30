"use client";

import { useYachtConditionUpdateFormData } from "@/hooks/product-types/yacht/condition/useYachtConditionUpdateFormData";
import { useParams } from "next/navigation";

import YachtConditionForm from "../../components/YachtConditionForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function YachtConditionEditPage() {
  const params = useParams();

  const conditionId = params.conditionId as string;

  const { data, isLoading, isError, errors, refetch } =
    useYachtConditionUpdateFormData(conditionId);

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

  return <YachtConditionForm initialData={data.initialData} />;
}
