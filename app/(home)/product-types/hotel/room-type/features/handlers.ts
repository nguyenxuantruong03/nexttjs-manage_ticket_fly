import { useDeleteHotelRoomType } from "@/hooks/product-types/hotel/hotel-room-type";
import { RoomTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelRoomType>;
}

export function createRoomTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(RoomTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(RoomTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting accessibility...",
        success: "RoomType deleted.",
        error: "Delete failed.",
      });
    },
  };
}
