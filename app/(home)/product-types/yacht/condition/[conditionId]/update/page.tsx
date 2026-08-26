"use client";

import { useYachtConditionUpdateFormData } from "@/hooks/product-types/yacht/condition/useYachtConditionUpdateFormData";
import { useParams } from "next/navigation";

import YachtConditionForm from "../../components/YachtConditionForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function YachtConditionEditPage() {
  const params = useParams();

  const conditionId = params.conditionId as string;

  const { data, isLoading, error } =
    useYachtConditionUpdateFormData(conditionId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <YachtConditionForm initialData={data.initialData} />;
}
