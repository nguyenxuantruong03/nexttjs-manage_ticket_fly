import toast from "react-hot-toast";

import { PolicyTypeRoutes } from "./routes";

import { useDeletePolicyType } from "@/hooks/features/policy-type";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeletePolicyType>;
}

export function createPolicyTypeHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(PolicyTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(PolicyTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting policy type...",
        success: "Policy type deleted.",
        error: "Delete failed.",
      });
    },
  };
}