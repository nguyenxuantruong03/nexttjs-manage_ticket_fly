import { useDeletePlaceType } from "@/hooks/location/place/place-type";
import { PlaceTypeRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeletePlaceType>;
}

export function createPlaceTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(PlaceTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(PlaceTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting place type...",
        success: "Place type deleted.",
        error: "Delete failed.",
      });
    },
  };
}
