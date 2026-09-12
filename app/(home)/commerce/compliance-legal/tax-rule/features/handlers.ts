import toast from "react-hot-toast";

import { TaxRuleRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteTaxRule } from "@/hooks/commerce/compliance-legal/tax-rule";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteTaxRule>;
}

export function createTaxRuleHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(TaxRuleRoutes.detail(id));
    },

    update(id: string) {
      router.push(TaxRuleRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting tax rule...",

        success: "Tax rule deleted.",

        error: "Delete failed.",
      });
    },
  };
}