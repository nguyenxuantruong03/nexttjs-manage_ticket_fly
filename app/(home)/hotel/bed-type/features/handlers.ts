import { useDeleteHotelBedType } from "@/hooks/hotel/hotel-bed-type";
import { BedTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelBedType>;
}

export function createBedTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(BedTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(BedTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting bed type...",
        success: "BedType deleted.",
        error: "Delete failed.",
      });
    },
  };
}
