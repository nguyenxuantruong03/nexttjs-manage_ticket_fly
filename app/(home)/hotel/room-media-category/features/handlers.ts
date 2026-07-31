import { useDeleteHotelRoomMediaCategory } from "@/hooks/hotel/hotel-room-media-category";
import { RoomMediaCategoryRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelRoomMediaCategory>;
}

export function createRoomMediaCategoryHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(RoomMediaCategoryRoutes.detail(id));
    },

    update(id: string) {
      router.push(RoomMediaCategoryRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting room media category...",
        success: "RoomMediaCategory deleted.",
        error: "Delete failed.",
      });
    },
  };
}
