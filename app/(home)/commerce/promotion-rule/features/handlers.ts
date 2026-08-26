import toast from "react-hot-toast";

import { PromotionRuleRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeletePromotionRule } from "@/hooks/commerce/promotion-rule";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeletePromotionRule>;
}

export function createPromotionRuleHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(PromotionRuleRoutes.detail(id));
    },

    update(id: string) {
      router.push(PromotionRuleRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting promotion rule...",
        success: "Promotion rule deleted.",
        error: "Delete failed.",
      });
    },
  };
}