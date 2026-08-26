import { useDeleteFlyCrewRole } from "@/hooks/product-types/references/airline/crew/crew-role";

import { FlyCrewRoleRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteFlyCrewRole>;
}

export function createFlyCrewRoleHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FlyCrewRoleRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyCrewRoleRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly crew role...",
        success: "Fly crew role deleted.",
        error: "Delete failed.",
      });
    },
  };
}