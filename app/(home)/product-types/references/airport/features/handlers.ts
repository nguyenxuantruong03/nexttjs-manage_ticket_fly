import { useDeleteFlyAirport } from "@/hooks/product-types/references/airport";
import { FlyAiportRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFlyAirport>;
}

export function createFlyAirportHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(FlyAiportRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyAiportRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting address...",
        success: "FlyAirport deleted.",
        error: "Delete failed.",
      });
    },
  };
}
