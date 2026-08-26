import { useDeleteHotelCheckInPolicy } from "@/hooks/product-types/hotel/hotel-check-in-policy";
import { HotelCheckInPolicyRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelCheckInPolicy>;
}

export function createHotelCheckInPolicyHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(HotelCheckInPolicyRoutes.detail(id));
    },

    update(id: string) {
      router.push(HotelCheckInPolicyRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting check-in policy...",
        success: "Check-in policy deleted.",
        error: "Delete failed.",
      });
    },
  };
}
