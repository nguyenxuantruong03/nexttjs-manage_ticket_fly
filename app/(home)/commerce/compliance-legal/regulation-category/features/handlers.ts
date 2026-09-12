import toast from "react-hot-toast";

import { RegulationCategoryRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteRegulationCategory } from "@/hooks/commerce/compliance-legal/regulation-category";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteRegulationCategory>;
}

export function createRegulationCategoryHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(RegulationCategoryRoutes.detail(id));
    },

    update(id: string) {
      router.push(RegulationCategoryRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(
        deleteMutation.mutateAsync(id),
        {
          loading: "Deleting regulation category...",

          success: "Regulation category deleted.",

          error: "Delete failed.",
        },
      );
    },
  };
}