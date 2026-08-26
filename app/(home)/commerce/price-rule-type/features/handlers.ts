import toast from "react-hot-toast";

import { PriceRuleTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeletePriceRuleType } from "@/hooks/commerce/price-rule-type";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeletePriceRuleType>;
}

export function createPriceRuleTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(PriceRuleTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(PriceRuleTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting price rule type...",
        success: "Price rule type deleted.",
        error: "Delete failed.",
      });
    },
  };
}