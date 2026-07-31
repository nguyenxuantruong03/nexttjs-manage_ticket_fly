import { useDeleteWard } from "@/hooks/location/ward";
import { WardRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteWard>;
}

export function createWardHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(WardRoutes.detail(id));
    },

    update(id: string) {
      router.push(WardRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting ward...",
        success: "Ward deleted.",
        error: "Delete failed.",
      });
    },
  };
}
