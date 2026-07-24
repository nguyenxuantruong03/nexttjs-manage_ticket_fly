import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { useDeleteBus } from "@/hooks/bus";
import { BusRoutes } from "./routes";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteBus>;
}

export function createBusHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(BusRoutes.detail(id));
    },

    update(id: string) {
      router.push(BusRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting bus...",
        success: "Bus deleted.",
        error: "Delete failed.",
      });
    },
  };
}
