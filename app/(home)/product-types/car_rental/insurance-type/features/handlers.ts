import { useDeleteCarRentalInsuranceType } from "@/hooks/product-types/car-rental/insurance-type";
import { CarRentalInsuranceTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteCarRentalInsuranceType>;
}

export function createCarRentalInsuranceTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(CarRentalInsuranceTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(CarRentalInsuranceTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting car rental insurance type...",
        success: "Car rental insurance type deleted.",
        error: "Delete failed.",
      });
    },
  };
}