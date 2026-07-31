"use client";

import { useHotelStarRatingCreateFormData } from "@/hooks/hotel/hotel-star-rating/useHotelStarRatingCreateFormData";
import StarRatingForm from "../components/StarRatingForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const StarRatingCreatePage = () => {
  const { data, isLoading, error } = useHotelStarRatingCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <StarRatingForm />;
};

export default StarRatingCreatePage;
