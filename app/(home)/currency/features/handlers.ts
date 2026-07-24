import { useDeleteCurrency } from "@/hooks/location/currency";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

import { CurrencyRoutes } from "./routes";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteCurrency>;
}

export function createCurrencyHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(CurrencyRoutes.detail(id));
    },

    update(id: string) {
      router.push(CurrencyRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting currency...",
        success: "Currency deleted.",
        error: "Delete failed.",
      });
    },
  };
}
