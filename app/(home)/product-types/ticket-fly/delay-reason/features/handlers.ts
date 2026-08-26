import { useDeleteFlyDelayReason } from "@/hooks/product-types/ticket-fly/delay-reason";

import { FlyDelayReasonRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFlyDelayReason>;
}

export function createFlyDelayReasonHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FlyDelayReasonRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlyDelayReasonRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly delay reason...",
        success: "Fly delay reason deleted.",
        error: "Delete failed.",
      });
    },
  };
}