import { useDeleteHotelFacilityCategory } from "@/hooks/hotel/hotel-facility-category";
import { FacilityCategoryRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelFacilityCategory>;
}

export function createFacilityCategoryHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FacilityCategoryRoutes.detail(id));
    },

    update(id: string) {
      router.push(FacilityCategoryRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting facility category...",
        success: "FacilityCategory deleted.",
        error: "Delete failed.",
      });
    },
  };
}
