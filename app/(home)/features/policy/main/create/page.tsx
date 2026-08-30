"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import PolicyForm from "../components/PolicyForm";
import { usePolicyCreateFormData } from "@/hooks/features/policy/usePolicyCreateFormData";

export default function PolicyCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    usePolicyCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          errors.policyType?.message ??
          "Không tải được dữ liệu chính sách, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <PolicyForm
      bookingTypeData={data.bookingTypeData}
      policyTypeData={data.policyTypeData}
    />
  );
}
