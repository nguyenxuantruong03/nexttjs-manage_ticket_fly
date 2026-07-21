import { CityRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { useDeleteCity } from "@/hooks/location/city";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteCity>;
}

export function createCityHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(CityRoutes.detail(id));
    },

    edit(id: string) {
      router.push(CityRoutes.edit(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting city...",
        success: "City deleted.",
        error: "Delete failed.",
      });
    },
  };
}
