import toast from "react-hot-toast";

import { FuelTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteFuelType } from "@/hooks/catalog/fuel-type";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFuelType>;
}

export function createFuelTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FuelTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(FuelTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fuel type...",
        success: "Fuel type deleted.",
        error: "Delete failed.",
      });
    },
  };
}