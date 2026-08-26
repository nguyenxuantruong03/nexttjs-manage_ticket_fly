import { useDeleteFlyAircraft } from "@/hooks/product-types/references/airline/aircraft";

import { FlyAircraftRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteFlyAircraft>;
}

export function createFlyAircraftHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FlyAircraftRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyAircraftRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly aircraft...",
        success: "Fly aircraft deleted.",
        error: "Delete failed.",
      });
    },
  };
}