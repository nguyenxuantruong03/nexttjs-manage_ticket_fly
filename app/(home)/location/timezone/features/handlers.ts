import { useDeleteTimezone } from "@/hooks/location/timezone";
import { TimezoneRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteTimezone>;
}

export function createTimezoneHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(TimezoneRoutes.detail(id));
    },

    update(id: string) {
      router.push(TimezoneRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting timezone...",
        success: "Timezone deleted.",
        error: "Delete failed.",
      });
    },
  };
}
