import { useDeleteHotelExtraType } from "@/hooks/hotel/hotel-extra-type";
import { ExtraTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelExtraType>;
}

export function createExtraTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(ExtraTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(ExtraTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting extratype...",
        success: "ExtraType deleted.",
        error: "Delete failed.",
      });
    },
  };
}
