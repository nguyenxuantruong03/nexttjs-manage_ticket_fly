import toast from "react-hot-toast";

import { ExtraTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteExtraType } from "@/hooks/commerce/extra-type";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteExtraType>;
}

export function createExtraTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(ExtraTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(ExtraTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting extra type...",
        success: "Extra type deleted.",
        error: "Delete failed.",
      });
    },
  };
}