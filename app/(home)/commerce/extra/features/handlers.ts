import toast from "react-hot-toast";

import { ExtraRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteExtra } from "@/hooks/commerce/extra";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteExtra>;
}

export function createExtraHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(ExtraRoutes.detail(id));
    },

    update(id: string) {
      router.push(ExtraRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting extra...",
        success: "Extra deleted.",
        error: "Delete failed.",
      });
    },
  };
}