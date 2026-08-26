import toast from "react-hot-toast";

import { BookingTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteBookingType } from "@/hooks/commerce/booking-type";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteBookingType>;
}

export function createBookingTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(BookingTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(BookingTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting booking type...",
        success: "Booking type deleted.",
        error: "Delete failed.",
      });
    },
  };
}
