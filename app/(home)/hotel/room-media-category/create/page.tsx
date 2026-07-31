"use client";

import { useHotelMediaCategoryCreateFormData } from "@/hooks/hotel/hotel-media-category/useHotelMediaCategoryCreateFormData";
import MediaCategoryForm from "../components/RoomMediaCategoryForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const MediaCategoryCreatePage = () => {
  const { data, isLoading, error } = useHotelMediaCategoryCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <MediaCategoryForm />;
};

export default MediaCategoryCreatePage;
