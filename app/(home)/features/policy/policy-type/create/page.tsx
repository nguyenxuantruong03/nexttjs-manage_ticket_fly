"use client";

import PolicyTypeForm from "../components/PolicyTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { usePolicyTypeCreateFormData } from "@/hooks/features/policy-type/usePolicyTypeCreateFormData";

const PolicyTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    usePolicyTypeCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại chính sách, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <PolicyTypeForm bookingTypeData={data.bookingTypeData.data} />;
};

export default PolicyTypeCreatePage;
