import { useDeleteHotelMediaCategory } from "@/hooks/hotel/hotel-media-category";
import { MediaCategoryRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelMediaCategory>;
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
        success: "MediaCategory deleted.",
        error: "Delete failed.",
      });
    },
  };
}
