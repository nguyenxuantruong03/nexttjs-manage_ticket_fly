"use client";

import { useParams } from "next/navigation";

import PolicyTypeForm from "../../components/PolicyTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { usePolicyTypeUpdateFormData } from "@/hooks/features/policy-type/usePolicyTypeUpdateFormData";

export default function PolicyTypeEditPage() {
  const params = useParams();

  const policyTypeId = params.policyTypeId as string;

  const { data, isLoading, error } =
    usePolicyTypeUpdateFormData(policyTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PolicyTypeForm
      initialData={data.policyTypeData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}