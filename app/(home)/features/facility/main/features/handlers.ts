import toast from "react-hot-toast";

import { FacilityRoutes } from "./routes";
import { useDeleteFacility } from "@/hooks/features/facility";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFacility>;
}

export function createFacilityHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(FacilityRoutes.detail(id));
    },

    update(id: string) {
      router.push(FacilityRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting facility...",
        success: "Facility deleted.",
        error: "Delete failed.",
      });
    },
  };
}
