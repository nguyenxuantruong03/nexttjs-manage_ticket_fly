import { useDeleteHotelDiningMealType } from "@/hooks/hotel/hotel-dining-meal-type";
import { DiningMealTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelDiningMealType>;
}

export function createDiningMealTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(DiningMealTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(DiningMealTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting dining meal type...",
        success: "DiningMealType deleted.",
        error: "Delete failed.",
      });
    },
  };
}
