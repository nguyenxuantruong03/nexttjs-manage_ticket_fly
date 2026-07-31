"use client";

import { useHotelPolicyTypeUpdateFormData } from "@/hooks/hotel/hotel-policy-type/useHotelPolicyTypeUpdateFormData";
import { useParams } from "next/navigation";
import PolicyTypeForm from "../../components/PolicyTypeForm";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function PolicyTypeEditPage() {
  const params = useParams();

  const policyTypeId = params.policyTypeId as string;

  const { data, isLoading, error } = useHotelPolicyTypeUpdateFormData(policyTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <PolicyTypeForm initialData={data.initialData} />;
}
