import toast from "react-hot-toast";

import { ServiceTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeleteServiceType } from "@/hooks/catalog/service-type";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteServiceType>;
}

export function createServiceTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(ServiceTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(ServiceTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting service type...",
        success: "Service type deleted.",
        error: "Delete failed.",
      });
    },
  };
}