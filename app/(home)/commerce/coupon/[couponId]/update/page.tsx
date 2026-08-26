"use client";

import { useParams } from "next/navigation";

import CouponForm from "../../components/CouponForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCouponUpdateFormData } from "@/hooks/commerce/coupon/useCouponUpdateFormData";

export default function CouponEditPage() {
  const params = useParams();

  const couponId = params.couponId as string;

  const { data, isLoading, error } = useCouponUpdateFormData(couponId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <CouponForm
      initialData={data.couponData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
