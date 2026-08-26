import toast from "react-hot-toast";

import { PromotionRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeletePromotion } from "@/hooks/commerce/promotion";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeletePromotion>;
}

export function createPromotionHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(PromotionRoutes.detail(id));
    },

    update(id: string) {
      router.push(PromotionRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting promotion...",
        success: "Promotion deleted.",
        error: "Delete failed.",
      });
    },
  };
}