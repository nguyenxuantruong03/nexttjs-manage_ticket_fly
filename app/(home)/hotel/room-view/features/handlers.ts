import { useDeleteHotelRoomView } from "@/hooks/hotel/hotel-room-view";
import { RoomViewRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelRoomView>;
}

export function createRoomViewHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(RoomViewRoutes.detail(id));
    },

    update(id: string) {
      router.push(RoomViewRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting room view...",
        success: "RoomView deleted.",
        error: "Delete failed.",
      });
    },
  };
}
