import toast from "react-hot-toast";

import { FacilityCategoryRoutes } from "./routes";
import { useDeleteFacilityCategory } from "@/hooks/features/facility-category";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFacilityCategory>;
}

export function createFacilityCategoryHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(FacilityCategoryRoutes.detail(id));
    },

    update(id: string) {
      router.push(FacilityCategoryRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting facility category...",
        success: "Facility category deleted.",
        error: "Delete failed.",
      });
    },
  };
}