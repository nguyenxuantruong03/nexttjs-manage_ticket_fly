import toast from "react-hot-toast";

import { ReasonCodeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteReasonCode } from "@/hooks/catalog/reason/reason-code";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteReasonCode>;
}

export function createReasonCodeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(ReasonCodeRoutes.detail(id));
    },

    update(id: string) {
      router.push(ReasonCodeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting reason code...",
        success: "Reason code deleted.",
        error: "Delete failed.",
      });
    },
  };
}
