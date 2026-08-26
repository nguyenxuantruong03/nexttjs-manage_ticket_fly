import { carRentalRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { useDeleteCarRental } from "@/hooks/product-types/car-rental";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteCarRental>;
}

export function createCarrentalHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(carRentalRoutes.detail(id));
    },

    update(id: string) {
      router.push(carRentalRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting car rental...",
        success: "Car Rental deleted.",
        error: "Delete failed.",
      });
    },
  };
}
