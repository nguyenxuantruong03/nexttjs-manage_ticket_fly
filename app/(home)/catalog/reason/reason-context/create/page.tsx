"use client";

import ReasonContextForm from "../components/ReasonContextForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useReasonContextCreateFormData } from "@/hooks/catalog/reason/reason-context/useReasonContextCreateFormData";

const ReasonContextCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useReasonContextCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Chỉ có 1 nguồn dữ liệu (bookingType) nên lấy thẳng message của nó.
    // Fallback về description mặc định của ErrorPage nếu error không có
    // message (vd lỗi network không phải instance Error chuẩn).
    return (
      <ErrorPage
        description={
          errors?.message ??
          "Không tải được dữ liệu loại đặt chỗ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <ReasonContextForm />;
};

export default ReasonContextCreatePage;
