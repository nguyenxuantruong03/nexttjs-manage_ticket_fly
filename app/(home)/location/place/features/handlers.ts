import { PlaceRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { useDeletePlace } from "@/hooks/location/place";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeletePlace>;
}

export function createPlaceHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(PlaceRoutes.detail(id));
    },

    update(id: string) {
      router.push(PlaceRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting place...",
        success: "Place deleted.",
        error: "Delete failed.",
      });
    },
  };
}
