import { useDeleteBusSeatType } from "@/hooks/product-types/bus/seat-type";
import { BusSeatTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteBusSeatType>;
}

export function createBusSeatTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(BusSeatTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(BusSeatTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting bus seat type...",
        success: "Bus seat type deleted.",
        error: "Delete failed.",
      });
    },
  };
}