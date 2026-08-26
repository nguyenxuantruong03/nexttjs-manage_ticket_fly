import { useDeleteFlyFareRuleType } from "@/hooks/product-types/ticket-fly/fare-rule-type";

import { FlyFareRuleTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFlyFareRuleType>;
}

export function createFlyFareRuleTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FlyFareRuleTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyFareRuleTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly fare rule type...",
        success: "Fly fare rule type deleted.",
        error: "Delete failed.",
      });
    },
  };
}