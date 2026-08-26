import toast from "react-hot-toast";

import { VehicleTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteVehicleType } from "@/hooks/catalog/vehicle-type";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteVehicleType>;
}

export function createVehicleTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(VehicleTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(VehicleTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting vehicle type...",
        success: "Vehicle type deleted.",
        error: "Delete failed.",
      });
    },
  };
}