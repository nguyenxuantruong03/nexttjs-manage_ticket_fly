import { useDeleteHotelStarRating } from "@/hooks/product-types/hotel/hotel-star-rating";
import { StarRatingRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelStarRating>;
}

export function createStarRatingHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(StarRatingRoutes.detail(id));
    },

    update(id: string) {
      router.push(StarRatingRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting accessibility...",
        success: "StarRating deleted.",
        error: "Delete failed.",
      });
    },
  };
}
