"use client";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useRegulationCategoryCreateFormData } from "@/hooks/commerce/compliance-legal/regulation-category/useRegulationCategoryCreateFormData";
import RegulationCategoryForm from "../components/RegulationCategoryForm";

const RegulationCategoryCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useRegulationCategoryCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          "Không tải được dữ liệu danh mục quy định, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <RegulationCategoryForm />;
};

export default RegulationCategoryCreatePage;
