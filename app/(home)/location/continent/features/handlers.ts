import { ContinentRoutes } from "./routes";

import toast from "react-hot-toast";

import { useDeleteContinent } from "@/hooks/location/country/continent";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteContinent>;
}

export function createContinentHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(ContinentRoutes.detail(id));
    },

    update(id: string) {
      router.push(ContinentRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting continent...",
        success: "Continent deleted.",
        error: "Delete failed.",
      });
    },
  };
}
