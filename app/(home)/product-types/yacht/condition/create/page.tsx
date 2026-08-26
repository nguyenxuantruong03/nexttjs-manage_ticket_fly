"use client";

import YachtConditionForm from "../components/YachtConditionForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useYachtConditionCreateFormData } from "@/hooks/product-types/yacht/condition/useYachtConditionCreateFormData";

const YachtConditionCreatePage = () => {
  const { data, isLoading, error } = useYachtConditionCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <YachtConditionForm />;
};

export default YachtConditionCreatePage;
