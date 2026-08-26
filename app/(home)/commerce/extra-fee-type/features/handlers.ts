import toast from "react-hot-toast";

import { ExtraFeeTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteExtraFeeType } from "@/hooks/commerce/extra-fee-type";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteExtraFeeType>;
}

export function createExtraFeeTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(ExtraFeeTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(ExtraFeeTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(
        deleteMutation.mutateAsync(id),
        {
          loading: "Deleting extra fee type...",

          success: "Extra fee type deleted.",

          error: "Delete failed.",
        },
      );
    },
  };
}