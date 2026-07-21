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

    edit(id: string) {
      router.push(BusRoutes.edit(id));
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
