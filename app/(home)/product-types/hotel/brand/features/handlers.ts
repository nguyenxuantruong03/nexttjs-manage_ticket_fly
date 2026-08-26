import { useDeleteHotelBrand } from "@/hooks/product-types/hotel/hotel-brand";
import { BrandRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelBrand>;
}

export function createBrandHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(BrandRoutes.detail(id));
    },

    update(id: string) {
      router.push(BrandRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting brand...",
        success: "Brand deleted.",
        error: "Delete failed.",
      });
    },
  };
}
