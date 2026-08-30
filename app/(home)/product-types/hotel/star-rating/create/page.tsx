"use client";

import { useHotelStarRatingCreateFormData } from "@/hooks/product-types/hotel/hotel-star-rating/useHotelStarRatingCreateFormData";
import StarRatingForm from "../components/StarRatingForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const StarRatingCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelStarRatingCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.starRating?.message ??
          "Không tải được dữ liệu hạng sao, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <StarRatingForm />;
};

export default StarRatingCreatePage;
