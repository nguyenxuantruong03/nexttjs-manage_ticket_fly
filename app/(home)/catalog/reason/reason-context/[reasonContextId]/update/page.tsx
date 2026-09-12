"use client";

import { useParams } from "next/navigation";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import ReasonContextForm from "../../components/ReasonContextForm";
import { useReasonContextUpdateFormData } from "@/hooks/catalog/reason/reason-context/useReasonContextUpdateFormData";

export default function ReasonContextEditPage() {
  const params = useParams();

  const reasonContextId = params.reasonContextId as string;

  const { data, isLoading, isError, errors, refetch } =
    useReasonContextUpdateFormData(reasonContextId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Có 2 nguồn lỗi khả dĩ (reasonContext, reasonCode) - ưu tiên hiện
    // message của reasonContext trước vì đó là dữ liệu chính của trang này.
    return (
      <ErrorPage
        description={
          errors.reasonContext?.message ??
          "Không tải được dữ liệu ngữ cảnh lý do, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <ReasonContextForm initialData={data.reasonContextData} />;
}
