import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { ProviderBookingRoutes } from "./routes";
import { useDeleteProviderBooking } from "@/hooks/provider-booking";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteProviderBooking>;
}

export function createProviderBookingHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(ProviderBookingRoutes.detail(id));
    },

    edit(id: string) {
      router.push(ProviderBookingRoutes.edit(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting ProviderBooking...",
        success: "ProviderBooking deleted.",
        error: "Delete failed.",
      });
    },
  };
}
