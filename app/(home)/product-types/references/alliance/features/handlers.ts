import { useDeleteFlyAlliance } from "@/hooks/product-types/references/alliance";

import { FlyAllianceRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFlyAlliance>;
}

export function createFlyAllianceHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FlyAllianceRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyAllianceRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting alliance...",
        success: "Fly Alliance deleted.",
        error: "Delete failed.",
      });
    },
  };
}