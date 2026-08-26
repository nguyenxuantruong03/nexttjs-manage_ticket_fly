import { useDeleteHotelMealPlan } from "@/hooks/product-types/hotel/hotel-meal-plan";
import { MealPlanRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelMealPlan>;
}

export function createMealPlanHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(MealPlanRoutes.detail(id));
    },

    update(id: string) {
      router.push(MealPlanRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting meal plan...",
        success: "MealPlan deleted.",
        error: "Delete failed.",
      });
    },
  };
}
