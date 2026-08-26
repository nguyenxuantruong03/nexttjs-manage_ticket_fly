import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { HotelRoutes } from "./routes";
import { useDeleteHotel } from "@/hooks/product-types/hotel";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotel>;
}

export function createHotelHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(HotelRoutes.detail(id));
    },

    update(id: string) {
      router.push(HotelRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting hotel...",
        success: "Hotel deleted.",
        error: "Delete failed.",
      });
    },
  };
}
