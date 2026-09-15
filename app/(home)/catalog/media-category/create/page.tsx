"use client";

import MediaCategoryForm from "../components/MediaCategoryForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useMediaCategoryCreateFormData } from "@/hooks/catalog/media-category/useMediaCategoryCreateFormData";

const MediaCategoryCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useMediaCategoryCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại đặt chỗ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <MediaCategoryForm bookingTypeData={data.bookingTypes.data} />;
};

export default MediaCategoryCreatePage;
