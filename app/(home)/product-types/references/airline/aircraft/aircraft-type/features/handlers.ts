import { useDeleteFlyAircraftType } from "@/hooks/product-types/references/airline/aircraft/aircraft-type";
import { FlyAircraftTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteFlyAircraftType>;
}

export function createFlyAircraftTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FlyAircraftTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyAircraftTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly aircraft type...",
        success: "Fly aircraft type deleted.",
        error: "Delete failed.",
      });
    },
  };
}
