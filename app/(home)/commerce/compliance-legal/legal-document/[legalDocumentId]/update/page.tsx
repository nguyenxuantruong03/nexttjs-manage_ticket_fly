"use client";

import { useParams } from "next/navigation";

import LegalDocumentForm from "../../components/LegalDocumentForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useLegalDocumentUpdateFormData } from "@/hooks/commerce/compliance-legal/legal-document/useLegalDocumentUpdateFormData";


export default function LegalDocumentEditPage() {
  const params = useParams();

  const legalDocumentId = params.legalDocumentId as string;

  const { data, isLoading, isError, errors, refetch } =
    useLegalDocumentUpdateFormData(legalDocumentId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.legalDocument?.message ??
          "Không tải được dữ liệu tài liệu pháp lý, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <LegalDocumentForm initialData={data.legalDocumentData} />;
}
