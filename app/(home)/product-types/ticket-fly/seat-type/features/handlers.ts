import { useDeleteFlySeatType } from "@/hooks/product-types/ticket-fly/seat-type";

import { FlySeatTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFlySeatType>;
}

export function createFlySeatTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FlySeatTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(FlySeatTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting fly seat type...",
        success: "Fly seat type deleted.",
        error: "Delete failed.",
      });
    },
  };
}