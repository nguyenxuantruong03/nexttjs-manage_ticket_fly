"use client";

import { useParams } from "next/navigation";
import MediaCategoryForm from "../../components/MediaCategoryForm";
import { useHotelMediaCategoryUpdateFormData } from "@/hooks/hotel/hotel-media-category/useHotelMediaCategoryUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function MediaCategoryEditPage() {
  const params = useParams();

  const mediaCategoryId = params.mediaCategoryId as string;

  const { data, isLoading, error } =
    useHotelMediaCategoryUpdateFormData(mediaCategoryId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <MediaCategoryForm initialData={data.initialData} />;
}
