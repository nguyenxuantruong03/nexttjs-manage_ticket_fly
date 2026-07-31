"use client";

import { useParams } from "next/navigation";
import MediaAssetForm from "../../components/MediaAssetForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useHotelMediaAssetUpdateFormData } from "@/hooks/hotel/hotel-media-asset/useHotelMediaAssetUpdateFormData";

export default function MediaAssetEditPage() {
  const params = useParams();

  const mediaAssetId = params.mediaAssetId as string;

  const { data, isLoading, error } =
    useHotelMediaAssetUpdateFormData(mediaAssetId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <MediaAssetForm initialData={data.initialData} />;
}
