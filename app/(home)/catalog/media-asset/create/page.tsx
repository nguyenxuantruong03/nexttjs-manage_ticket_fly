"use client";

import MediaAssetForm from "../components/MediaAssetForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useMediaAssetCreateFormData } from "@/hooks/catalog/media-asset/useMediaAssetCreateFormData";

const MediaAssetCreatePage = () => {
  const {
    data,
    isLoading,
    isError,
    errors,
    refetch,
  } = useMediaAssetCreateFormData();

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

  return (
    <MediaAssetForm
      bookingTypeData={data.bookingTypes}
    />
  );
};

export default MediaAssetCreatePage;