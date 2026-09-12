import toast from "react-hot-toast";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteMediaCategory } from "@/hooks/catalog/media-category";
import { MediaCategoryRoutes } from "./routes";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteMediaCategory>;
}

export function createMediaCategoryHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(MediaCategoryRoutes.detail(id));
    },

    update(id: string) {
      router.push(MediaCategoryRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting media category...",
        success: "Media category deleted.",
        error: "Delete failed.",
      });
    },
  };
}
