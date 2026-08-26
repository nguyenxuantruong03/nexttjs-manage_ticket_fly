import { useDeleteFlyAirline } from "@/hooks/product-types/references/airline";
import { FlyAirlineRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteFlyAirline>;
}

export function createFlyAirlineHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(FlyAirlineRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyAirlineRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly airline...",
        success: "Fly airline deleted.",
        error: "Delete failed.",
      });
    },
  };
}
