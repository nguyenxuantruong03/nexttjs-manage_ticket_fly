import { DiningServiceTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { useDeleteHotelDiningServiceType } from "@/hooks/product-types/hotel/hotel-dining-service-type";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelDiningServiceType>;
}

export function createDiningServiceTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(DiningServiceTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(DiningServiceTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting dining service type...",
        success: "DiningServiceType deleted.",
        error: "Delete failed.",
      });
    },
  };
}
