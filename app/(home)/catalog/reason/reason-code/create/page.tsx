"use client";

import ReasonCodeForm from "../components/ReasonCodeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useReasonCodeCreateFormData } from "@/hooks/catalog/reason/reason-code/useReasonCodeCreateFormData";

const ReasonCodeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useReasonCodeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Chỉ có 1 nguồn dữ liệu (context) nên lấy thẳng message của nó.
    // Fallback về description mặc định của ErrorPage nếu error không có
    // message (vd lỗi network không phải instance Error chuẩn).
    return (
      <ErrorPage
        description={
          errors.reasonContext?.message ??
          "Không tải được dữ liệu ngữ cảnh, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <ReasonCodeForm contextData={data.reasonContexts} />;
};

export default ReasonCodeCreatePage;
