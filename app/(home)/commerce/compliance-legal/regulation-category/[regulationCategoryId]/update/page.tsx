"use client";

import { useParams } from "next/navigation";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useRegulationCategoryUpdateFormData } from "@/hooks/commerce/compliance-legal/regulation-category/useRegulationCategoryUpdateFormData";
import RegulationCategoryForm from "../../components/RegulationCategoryForm";

export default function RegulationCategoryEditPage() {
  const params = useParams();

  const regulationCategoryId = params.regulationCategoryId as string;

  const { data, isLoading, isError, errors, refetch } =
    useRegulationCategoryUpdateFormData(regulationCategoryId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.regulationCategory?.message ??
          "Không tải được dữ liệu danh mục quy định, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <RegulationCategoryForm initialData={data.regulationCategoryData} />;
}
