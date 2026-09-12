import toast from "react-hot-toast";

import { WhitelistEntryRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteWhitelistEntry } from "@/hooks/commerce/risk-fraud/whitelist-entry";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteWhitelistEntry>;
}

export function createWhitelistEntryHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(WhitelistEntryRoutes.detail(id));
    },

    update(id: string) {
      router.push(WhitelistEntryRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting whitelist entry...",
        success: "Whitelist entry deleted.",
        error: "Delete failed.",
      });
    },
  };
}
