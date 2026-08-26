"use client";

import { useParams } from "next/navigation";

import PolicyForm from "../../components/PolicyForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { usePolicyUpdateFormData } from "@/hooks/features/policy/usePolicyUpdateFormData";

export default function PolicyEditPage() {
  const params = useParams();

  const policyId = params.policyId as string;

  const { data, isLoading, error } =
    usePolicyUpdateFormData(policyId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PolicyForm
      initialData={data.policyData}
      bookingTypeData={data.bookingTypeData}
      policyTypeData={data.policyTypeData}
    />
  );
}