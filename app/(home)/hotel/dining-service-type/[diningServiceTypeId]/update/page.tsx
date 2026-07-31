"use client";

import { useParams } from "next/navigation";
import DiningServiceTypeForm from "../../components/DiningServiceTypeForm";
import { useHotelDiningServiceTypeUpdateFormData } from "@/hooks/hotel/hotel-dining-service-type/useHotelDiningServiceTypeUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function DiningServiceTypeEditPage() {
  const params = useParams();

  const accessibilityId = params.accessibilityId as string;

  const { data, isLoading, error } =
    useHotelDiningServiceTypeUpdateFormData(accessibilityId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <DiningServiceTypeForm initialData={data.initialData} />;
}
