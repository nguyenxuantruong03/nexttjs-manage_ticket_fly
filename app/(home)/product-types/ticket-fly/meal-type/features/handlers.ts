import { useDeleteFlyMealType } from "@/hooks/product-types/ticket-fly/meal-type";

import { FlyMealTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFlyMealType>;
}

export function createFlyMealTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FlyMealTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyMealTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly meal type...",
        success: "Fly meal type deleted.",
        error: "Delete failed.",
      });
    },
  };
}