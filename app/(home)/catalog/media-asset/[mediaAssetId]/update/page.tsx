"use client";

import { useParams } from "next/navigation";

import MediaAssetForm from "../../components/MediaAssetForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useMediaAssetUpdateFormData } from "@/hooks/catalog/media-asset/useMediaAssetUpdateFormData";

export default function MediaAssetEditPage() {
  const params = useParams();

  const mediaAssetId = params.mediaAssetId as string;

  const {
    data,
    isLoading,
    isError,
    errors,
    refetch,
  } = useMediaAssetUpdateFormData(mediaAssetId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.mediaAsset?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu media asset, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <MediaAssetForm
      initialData={data.mediaAssetData}
      bookingTypeData={data.bookingTypes}
    />
  );
}