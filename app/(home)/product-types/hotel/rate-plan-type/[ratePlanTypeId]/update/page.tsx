"use client";

import { useParams } from "next/navigation";
import RatePlanTypeForm from "../../components/RatePlanTypeForm";
import { useHotelRatePlanTypeUpdateFormData } from "@/hooks/product-types/hotel/hotel-rate-plan-type/useHotelRatePlanTypeUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function RatePlanTypeEditPage() {
  const params = useParams();

  const ratePlanTypeId = params.ratePlanTypeId as string;

  const { data, isLoading, error } =
    useHotelRatePlanTypeUpdateFormData(ratePlanTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <RatePlanTypeForm initialData={data.initialData} />;
}
