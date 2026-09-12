import toast from "react-hot-toast";

import { BlacklistEntryRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteBlacklistEntry } from "@/hooks/commerce/risk-fraud/blacklist-entry";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteBlacklistEntry>;
}

export function createBlacklistEntryHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(BlacklistEntryRoutes.detail(id));
    },

    update(id: string) {
      router.push(BlacklistEntryRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting blacklist entry...",
        success: "Blacklist entry deleted.",
        error: "Delete failed.",
      });
    },
  };
}
