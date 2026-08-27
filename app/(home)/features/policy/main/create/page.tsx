"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import PolicyForm from "../components/PolicyForm";

import { usePolicyCreateFormData } from "@/hooks/features/policy/usePolicyCreateFormData";

export default function PolicyCreatePage() {
  const { data, isLoading, error } = usePolicyCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PolicyForm
      bookingTypeData={data.bookingTypeData}
      policyTypeData={data.policyTypeData}
    />
  );
}