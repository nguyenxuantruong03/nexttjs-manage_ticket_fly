import { useDeleteCarRentalInsuranceBenefitType } from "@/hooks/product-types/car-rental/insurance-benefit-type";
import { CarRentalInsuranceBenefitTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteCarRentalInsuranceBenefitType>;
}

export function createCarRentalInsuranceBenefitTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(CarRentalInsuranceBenefitTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(CarRentalInsuranceBenefitTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting car rental insurance benefit type...",
        success: "Car rental insurance benefit type deleted.",
        error: "Delete failed.",
      });
    },
  };
}