import { useDeleteYachtCrewRole } from "@/hooks/product-types/yacht/crew-role";
import { YachtCrewRoleRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteYachtCrewRole>;
}

export function createYachtCrewRoleHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(YachtCrewRoleRoutes.detail(id));
    },

    update(id: string) {
      router.push(YachtCrewRoleRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting yacht crew role...",
        success: "Yacht crew role deleted.",
        error: "Delete failed.",
      });
    },
  };
}