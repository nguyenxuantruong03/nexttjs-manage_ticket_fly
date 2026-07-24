import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { YachtRoutes } from "./routes";
import { useDeleteYacht } from "@/hooks/yacht";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteYacht>;
}

export function createYachtHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(YachtRoutes.detail(id));
    },

    update(id: string) {
      router.push(YachtRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting Yacht...",
        success: "Yacht deleted.",
        error: "Delete failed.",
      });
    },
  };
}
