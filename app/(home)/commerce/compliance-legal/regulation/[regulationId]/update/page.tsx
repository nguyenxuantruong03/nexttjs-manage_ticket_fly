"use client";

import { useParams } from "next/navigation";

import RegulationForm from "../../components/RegulationForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useRegulationUpdateFormData } from "@/hooks/commerce/compliance-legal/regulation/useRegulationUpdateFormData";

export default function RegulationEditPage() {
  const params = useParams();

  const regulationId = params.regulationId as string;

  const { data, isLoading, isError, errors, refetch } =
    useRegulationUpdateFormData(regulationId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Có 2 nguồn lỗi khả dĩ (regulation, bookingType) - ưu tiên hiện
    // message của regulation trước vì đó là dữ liệu chính của trang này.
    return (
      <ErrorPage
        description={
          errors.regulation?.message ??
          errors.regulationCategory?.message ??
          "Không tải được dữ liệu quy định, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <RegulationForm
      initialData={data.regulationData}
      regulationCategoryData={data.regulationCategoryData.data}
    />
  );
}
