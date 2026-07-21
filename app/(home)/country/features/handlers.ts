import { CountryRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { useDeleteCity } from "@/hooks/location/city";
import { useDeleteCountry } from "@/hooks/location/country";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteCountry>;
}

export function createCountryHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(CountryRoutes.detail(id));
    },

    edit(id: string) {
      router.push(CountryRoutes.edit(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting country...",
        success: "Country deleted.",
        error: "Delete failed.",
      });
    },
  };
}
