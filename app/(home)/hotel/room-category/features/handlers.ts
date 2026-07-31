import { useDeleteHotelRoomCategory } from "@/hooks/hotel/hotel-room-category";
import { RoomCategoryRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelRoomCategory>;
}

export function createRoomCategoryHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(RoomCategoryRoutes.detail(id));
    },

    update(id: string) {
      router.push(RoomCategoryRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting category...",
        success: "RoomCategory deleted.",
        error: "Delete failed.",
      });
    },
  };
}
