import toast from "react-hot-toast";

import { RegulationRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteRegulation } from "@/hooks/commerce/compliance-legal/regulation";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteRegulation>;
}

export function createRegulationHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(RegulationRoutes.detail(id));
    },

    update(id: string) {
      router.push(RegulationRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting regulation...",

        success: "Regulation deleted.",

        error: "Delete failed.",
      });
    },
  };
}
