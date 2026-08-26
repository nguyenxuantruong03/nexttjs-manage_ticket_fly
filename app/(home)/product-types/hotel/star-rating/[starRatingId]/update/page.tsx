"use client";

import { useParams } from "next/navigation";
import StarRatingForm from "../../components/StarRatingForm";
import { useHotelStarRatingUpdateFormData } from "@/hooks/product-types/hotel/hotel-star-rating/useHotelStarRatingUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function StarRatingEditPage() {
  const params = useParams();

  const starRatingId = params.starRatingId as string;

  const { data, isLoading, error } =
    useHotelStarRatingUpdateFormData(starRatingId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <StarRatingForm initialData={data.initialData} />;
}
