import toast from "react-hot-toast";

import { ReasonContextRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteReasonContext } from "@/hooks/catalog/reason/reason-context";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteReasonContext>;
}

export function createReasonContextHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(ReasonContextRoutes.detail(id));
    },

    update(id: string) {
      router.push(ReasonContextRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting reason context...",
        success: "Reason context deleted.",
        error: "Delete failed.",
      });
    },
  };
}
