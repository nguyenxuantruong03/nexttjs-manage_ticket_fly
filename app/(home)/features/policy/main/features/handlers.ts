import toast from "react-hot-toast";

import { PolicyRoutes } from "./routes";

import { useDeletePolicy } from "@/hooks/features/policy";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeletePolicy>;
}

export function createPolicyHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(PolicyRoutes.detail(id));
    },

    update(id: string) {
      router.push(PolicyRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting policy...",

        success: "Policy deleted.",

        error: "Delete failed.",
      });
    },
  };
}