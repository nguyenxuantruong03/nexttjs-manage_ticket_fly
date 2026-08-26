import { useDeleteFlyCrew } from "@/hooks/product-types/references/airline/crew";
import { FlyCrewRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteFlyCrew>;
}

export function createFlyCrewHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(FlyCrewRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyCrewRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly crew...",

        success: "Fly crew deleted.",

        error: "Delete failed.",
      });
    },
  };
}
