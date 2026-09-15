"use client";

import { useParams } from "next/navigation";

import MediaCategoryForm from "../../components/MediaCategoryForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useMediaCategoryUpdateFormData } from "@/hooks/catalog/media-category/useMediaCategoryUpdateFormData";

export default function MediaCategoryEditPage() {
  const params = useParams();

  const mediaCategoryId = params.mediaCategoryId as string;

  const { data, isLoading, isError, errors, refetch } =
    useMediaCategoryUpdateFormData(mediaCategoryId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.mediaCategory?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu media category, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <MediaCategoryForm
      initialData={data.mediaCategoryData}
      bookingTypeData={data.bookingTypes.data}
    />
  );
}
