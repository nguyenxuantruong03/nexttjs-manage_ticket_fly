import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { UserRoutes } from "./routes";
import { useDeleteUser } from "@/hooks/user";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteUser>;
}

export function createUserHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(UserRoutes.detail(id));
    },

    edit(id: string) {
      router.push(UserRoutes.edit(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting User...",
        success: "User deleted.",
        error: "Delete failed.",
      });
    },
  };
}
