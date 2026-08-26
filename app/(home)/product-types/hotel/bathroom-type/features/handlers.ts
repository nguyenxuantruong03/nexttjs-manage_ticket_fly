import { useDeleteHotelBathroomType } from "@/hooks/product-types/hotel/hotel-bathroom-type";
import { BathroomTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelBathroomType>;
}

export function createBathRoomTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(BathroomTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(BathroomTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting Bath room type...",
        success: "Bath room type deleted.",
        error: "Delete failed.",
      });
    },
  };
}
