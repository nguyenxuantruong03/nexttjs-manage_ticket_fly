"use client";

import { useParams } from "next/navigation";
import ExtraTypeForm from "../../components/ExtraTypeForm";
import { useHotelExtraTypeUpdateFormData } from "@/hooks/hotel/hotel-extra-type/useHotelExtraTypeUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function ExtraTypeEditPage() {
  const params = useParams();

  const extraTypeId = params.extraTypeId as string;

  const { data, isLoading, error } =
    useHotelExtraTypeUpdateFormData(extraTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <ExtraTypeForm initialData={data.initialData} />;
}
