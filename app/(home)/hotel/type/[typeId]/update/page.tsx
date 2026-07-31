"use client";

import { useParams } from "next/navigation";
import TypeForm from "../../components/HotelTypeForm";
import { useHotelTypeUpdateFormData } from "@/hooks/hotel/hotel-type/useHotelTypeUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function TypeEditPage() {
  const params = useParams();

  const typeId = params.typeId as string;

  const { data, isLoading, error } = useHotelTypeUpdateFormData(typeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <TypeForm initialData={data.initialData} />;
}
