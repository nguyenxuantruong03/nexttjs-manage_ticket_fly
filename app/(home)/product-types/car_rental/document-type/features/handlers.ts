import { useDeleteCarRentalDocumentType } from "@/hooks/product-types/car-rental/document-type";

import { CarRentalDocumentTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteCarRentalDocumentType>;
}

export function createCarRentalDocumentTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(CarRentalDocumentTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(CarRentalDocumentTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting car rental document type...",
        success: "Car rental document type deleted.",
        error: "Delete failed.",
      });
    },
  };
}