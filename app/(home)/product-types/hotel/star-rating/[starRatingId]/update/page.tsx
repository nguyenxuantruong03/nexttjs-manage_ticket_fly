"use client";

import { useParams } from "next/navigation";
import StarRatingForm from "../../components/StarRatingForm";
import { useHotelStarRatingUpdateFormData } from "@/hooks/product-types/hotel/hotel-star-rating/useHotelStarRatingUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function StarRatingEditPage() {
  const params = useParams();

  const starRatingId = params.starRatingId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelStarRatingUpdateFormData(starRatingId);

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

  return <StarRatingForm initialData={data.initialData} />;
}
