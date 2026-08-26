"use client";

import { useFlyFareRuleTypeCreateFormData } from "@/hooks/product-types/ticket-fly/fare-rule-type/useFlyFareRuleTypeCreateFormData";

import FlyFareRuleTypeForm from "../components/FlyFareRuleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyFareRuleTypeCreatePage = () => {
  const { data, isLoading, error } = useFlyFareRuleTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyFareRuleTypeForm />;
};

export default FlyFareRuleTypeCreatePage;
