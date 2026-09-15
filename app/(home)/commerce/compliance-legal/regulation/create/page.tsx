"use client";

import RegulationForm from "../components/RegulationForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useRegulationCreateFormData } from "@/hooks/commerce/compliance-legal/regulation/useRegulationCreateFormData";

const RegulationCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useRegulationCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Chỉ có 1 nguồn dữ liệu (regulation) nên lấy thẳng message của nó.
    // Fallback về description mặc định của ErrorPage nếu error không có
    // message (vd lỗi network không phải instance Error chuẩn).
    return (
      <ErrorPage
        description={
          errors.regulationCategory?.message ??
          "Không tải được dữ liệu quy định, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <RegulationForm regulationCategoryData={data.regulationCategoryData.data} />
  );
};

export default RegulationCreatePage;
