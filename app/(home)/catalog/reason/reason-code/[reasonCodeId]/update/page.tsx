"use client";

import { useParams } from "next/navigation";

import ReasonCodeForm from "../../components/ReasonCodeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useReasonCodeUpdateFormData } from "@/hooks/catalog/reason/reason-code/useReasonCodeUpdateFormData";

export default function ReasonCodeEditPage() {
  const params = useParams();

  const reasonCodeId = params.reasonCodeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useReasonCodeUpdateFormData(reasonCodeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Có 2 nguồn lỗi khả dĩ (reasonCode, context) - ưu tiên hiện
    // message của reasonCode trước vì đó là dữ liệu chính của trang này.
    return (
      <ErrorPage
        description={
          errors.reasonCode?.message ??
          errors.reasonContext?.message ??
          "Không tải được dữ liệu lý do, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <ReasonCodeForm
      initialData={data.reasonCodeData}
      contextData={data.reasonContexts.data}
    />
  );
}
