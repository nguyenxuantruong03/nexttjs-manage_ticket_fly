"use client";

import { useParams } from "next/navigation";

import FacilityCategoryForm from "../../components/FacilityCategoryForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useFacilityCategoryUpdateFormData } from "@/hooks/features/facility-category/useFacilityCategoryUpdateFormData";

export default function FacilityCategoryEditPage() {
  const params = useParams();

  const facilityCategoryId = params.facilityCategoryId as string;

  const { data, isLoading, error } =
    useFacilityCategoryUpdateFormData(facilityCategoryId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FacilityCategoryForm initialData={data.facilityCategoryData} bookingTypeData={data.bookingTypeData}/>;
}
