import { useDeleteHotelFacility } from "@/hooks/hotel/hotel-facility";
import { FacilityRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelFacility>;
}

export function createFacilityHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(FacilityRoutes.detail(id));
    },

    update(id: string) {
      router.push(FacilityRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting facility...",
        success: "Facility deleted.",
        error: "Delete failed.",
      });
    },
  };
}
