import toast from "react-hot-toast";

import { MediaAssetRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteMediaAsset } from "@/hooks/catalog/media-asset";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteMediaAsset>;
}

export function createMediaAssetHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(MediaAssetRoutes.detail(id));
    },

    update(id: string) {
      router.push(MediaAssetRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting media asset...",
        success: "Media asset deleted.",
        error: "Delete failed.",
      });
    },
  };
}