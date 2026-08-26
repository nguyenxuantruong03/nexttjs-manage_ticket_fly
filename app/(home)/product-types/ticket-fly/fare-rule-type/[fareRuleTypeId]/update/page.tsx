"use client";

import { useFlyFareRuleTypeUpdateFormData } from "@/hooks/product-types/ticket-fly/fare-rule-type/useFlyFareRuleTypeUpdateFormData";

import { useParams } from "next/navigation";

import FlyFareRuleTypeForm from "../../components/FlyFareRuleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyFareRuleTypeEditPage() {
  const params = useParams();

  const fareRuleTypeId = params.fareRuleTypeId as string;

  const { data, isLoading, error } =
    useFlyFareRuleTypeUpdateFormData(fareRuleTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyFareRuleTypeForm initialData={data.initialData} />;
}
