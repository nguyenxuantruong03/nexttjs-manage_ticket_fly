import { useDeleteHotelSustainability } from "@/hooks/product-types/hotel/hotel-sustainability";
import { SustainabilityRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelSustainability>;
}

export function createSustainabilityHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(SustainabilityRoutes.detail(id));
    },

    update(id: string) {
      router.push(SustainabilityRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting sustainability...",
        success: "Sustainability deleted.",
        error: "Delete failed.",
      });
    },
  };
}
