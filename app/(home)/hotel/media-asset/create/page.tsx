"use client";

import MediaAssetForm from "../components/MediaAssetForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useHotelMediaAssetCreateFormData } from "@/hooks/hotel/hotel-media-asset/useHotelMediaAssetCreateFormData";

const MediaAssetCreatePage = () => {
  const { data, isLoading, error } = useHotelMediaAssetCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <MediaAssetForm />;
};

export default MediaAssetCreatePage;
