import { useDeleteHotelRatePlanType } from "@/hooks/hotel/hotel-rate-plan-type";
import { RatePlanTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelRatePlanType>;
}

export function createRatePlanTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(RatePlanTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(RatePlanTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting rate plan type...",
        success: "RatePlanType deleted.",
        error: "Delete failed.",
      });
    },
  };
}
