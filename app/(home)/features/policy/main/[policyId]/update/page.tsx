"use client";

import { useParams } from "next/navigation";

import PolicyForm from "../../components/PolicyForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { usePolicyUpdateFormData } from "@/hooks/features/policy/usePolicyUpdateFormData";

export default function PolicyEditPage() {
  const params = useParams();
  const policyId = params.policyId as string;

  const { data, isLoading, isError, errors, refetch } =
    usePolicyUpdateFormData(policyId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.policy?.message ??
          errors.policyType?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu chính sách, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <PolicyForm
      initialData={data.policyData}
      bookingTypeData={data.bookingTypeData}
      policyTypeData={data.policyTypeData}
    />
  );
}
