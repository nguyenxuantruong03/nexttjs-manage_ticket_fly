"use client";

import { useParams } from "next/navigation";

import PolicyTypeForm from "../../components/PolicyTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { usePolicyTypeUpdateFormData } from "@/hooks/features/policy-type/usePolicyTypeUpdateFormData";

export default function PolicyTypeEditPage() {
  const params = useParams();
  const policyTypeId = params.policyTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    usePolicyTypeUpdateFormData(policyTypeId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.policyType?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại chính sách, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <PolicyTypeForm
      initialData={data.policyTypeData}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
}
