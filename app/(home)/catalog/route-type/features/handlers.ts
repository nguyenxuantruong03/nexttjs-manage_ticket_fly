import toast from "react-hot-toast";

import { RouteTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteRouteType } from "@/hooks/catalog/route-type";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteRouteType>;
}

export function createRouteTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(RouteTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(RouteTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting route type...",
        success: "Route type deleted.",
        error: "Delete failed.",
      });
    },
  };
}