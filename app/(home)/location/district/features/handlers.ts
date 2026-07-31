import { useDeleteDistrict } from "@/hooks/location/district";
import { DistrictRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteDistrict>;
}

export function createDistrictHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(DistrictRoutes.detail(id));
    },

    update(id: string) {
      router.push(DistrictRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting district...",
        success: "District deleted.",
        error: "Delete failed.",
      });
    },
  };
}
