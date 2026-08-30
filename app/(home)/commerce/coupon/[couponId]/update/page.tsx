"use client";

import { useParams } from "next/navigation";

import CouponForm from "../../components/CouponForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCouponUpdateFormData } from "@/hooks/commerce/coupon/useCouponUpdateFormData";

export default function CouponEditPage() {
  const params = useParams();

  const couponId = params.couponId as string;

  const { data, isLoading, isError, errors, refetch } =
    useCouponUpdateFormData(couponId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.coupon?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu coupon, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <CouponForm
      initialData={data.couponData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
