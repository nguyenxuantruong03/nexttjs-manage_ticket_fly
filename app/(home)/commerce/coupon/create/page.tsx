"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import CouponForm from "../components/CouponForm";
import { useCouponCreateFormData } from "@/hooks/commerce/coupon/useCouponCreateFormData";

export default function CouponCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useCouponCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại đặt chỗ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <CouponForm bookingTypeData={data.bookingTypeData.data} />;
}
