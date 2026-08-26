import toast from "react-hot-toast";

import { BookingItemTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteBookingItemType } from "@/hooks/commerce/booking-item-type";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteBookingItemType>;
}

export function createBookingItemTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(BookingItemTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(BookingItemTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting booking item type...",
        success: "Booking item type deleted.",
        error: "Delete failed.",
      });
    },
  };
}