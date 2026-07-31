"use client";

import { useParams } from "next/navigation";
import PolicyForm from "../../components/PolicyForm";
import { useHotelPolicyUpdateFormData } from "@/hooks/hotel/hotel-policy/useHotelPolicyUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function PolicyEditPage() {
  const params = useParams();

  const policyId = params.policyId as string;

  const { data, isLoading, error } = useHotelPolicyUpdateFormData(policyId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PolicyForm
      initialData={data.initialData}
      policyTypeData={data.policyType}
    />
  );
}
