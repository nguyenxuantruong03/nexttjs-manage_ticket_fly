import toast from "react-hot-toast";

import { FeatureFlagRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteFeatureFlag } from "@/hooks/commerce/feature-flag";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteFeatureFlag>;
}

export function createFeatureFlagHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(FeatureFlagRoutes.detail(id));
    },

    update(id: string) {
      router.push(FeatureFlagRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting feature flag...",

        success: "Feature flag deleted.",

        error: "Delete failed.",
      });
    },
  };
}
