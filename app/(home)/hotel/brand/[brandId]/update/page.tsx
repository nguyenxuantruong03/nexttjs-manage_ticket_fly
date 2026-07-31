"use client";

import { useParams } from "next/navigation";
import BrandForm from "../../components/BrandForm";
import { useHotelBrandUpdateFormData } from "@/hooks/hotel/hotel-brand/useHotelBrandUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function BrandEditPage() {
  const params = useParams();

  const brandId = params.brandId as string;

  const { data, isLoading, error } = useHotelBrandUpdateFormData(brandId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <BrandForm initialData={data.initialData} />;
}
