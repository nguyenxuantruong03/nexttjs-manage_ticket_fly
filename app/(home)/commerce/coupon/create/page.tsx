"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import CouponForm from "../components/CouponForm";
import { useCouponCreateFormData } from "@/hooks/commerce/coupon/useCouponCreateFormData";

export default function CouponCreatePage() {
  const { data, isLoading, error } = useCouponCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <CouponForm bookingTypeData={data.bookingTypeData} />;
}
