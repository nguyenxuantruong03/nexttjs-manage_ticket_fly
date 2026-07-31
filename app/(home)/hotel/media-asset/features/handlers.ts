import { useDeleteHotelMediaAsset } from "@/hooks/hotel/hotel-media-asset";
import { MediaAssetRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelMediaAsset>;
}

export function createMediaAssetHandlers({ router, deleteMutation }: Props) {
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
        success: "MediaAsset deleted.",
        error: "Delete failed.",
      });
    },
  };
}
