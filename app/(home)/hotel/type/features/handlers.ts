import { useDeleteHotelType } from "@/hooks/hotel/hotel-type";
import { TypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelType>;
}

export function createTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(TypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(TypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting type...",
        success: "Type deleted.",
        error: "Delete failed.",
      });
    },
  };
}
