"use client";

import { useParams } from "next/navigation";
import FacilityCategoryForm from "../../components/FacilityCategoryForm";
import { useHotelFacilityCategoryUpdateFormData } from "@/hooks/hotel/hotel-facility-category/useHotelFacilityCategoryUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function FacilityCategoryEditPage() {
  const params = useParams();

  const facilityCategoryId = params.facilityCategoryId as string;

  const { data, isLoading, error } =
    useHotelFacilityCategoryUpdateFormData(facilityCategoryId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FacilityCategoryForm initialData={data.initialData} />;
}
