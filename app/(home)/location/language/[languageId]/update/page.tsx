"use client";

import { useParams } from "next/navigation";

import LanguageForm from "../../components/LanguageForm";
import { useLanguageUpdateFormData } from "@/hooks/location/language/useLanguageUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function LanguageEditPage() {
  const params = useParams();

  const languageId = params.languageId as string;

  const { data, isLoading, isError, errors, refetch } =
    useLanguageUpdateFormData(languageId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.language?.message ??
          "Không tải được dữ liệu ngôn ngữ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <LanguageForm initialData={data.initialData} />;
}
