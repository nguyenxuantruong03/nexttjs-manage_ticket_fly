import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

import { TagRoutes } from "./routes";
import { useDeleteSearchTag } from "@/hooks/search/tag";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteSearchTag>;
}

export function createTagHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(TagRoutes.detail(id));
    },

    update(id: string) {
      router.push(TagRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting tag...",
        success: "Tag deleted.",
        error: "Delete failed.",
      });
    },
  };
}
