import { useDeleteFlyAddonType } from "@/hooks/product-types/references/airline/addon-type";
import { FlyAddonTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFlyAddonType>;
}

export function createFlyAddonTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(FlyAddonTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyAddonTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly addon type...",
        success: "Fly addon type deleted.",
        error: "Delete failed.",
      });
    },
  };
}
