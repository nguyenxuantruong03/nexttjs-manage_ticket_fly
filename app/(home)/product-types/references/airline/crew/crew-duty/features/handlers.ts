import { useDeleteFlyCrewDuty } from "@/hooks/product-types/references/airline/crew/crew-duty";

import { FlyCrewDutyRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFlyCrewDuty>;
}

export function createFlyCrewDutyHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(FlyCrewDutyRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyCrewDutyRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly crew duty...",
        success: "Fly crew duty deleted.",
        error: "Delete failed.",
      });
    },
  };
}
