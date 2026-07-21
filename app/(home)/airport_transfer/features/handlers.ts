import { airportTransferRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteAirportTransfer } from "@/hooks/airport-transfer";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteAirportTransfer>;
}

export function createAirportTransferHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(airportTransferRoutes.detail(id));
    },

    edit(id: string) {
      router.push(airportTransferRoutes.edit(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting airport transfer...",
        success: "Airport transfer deleted.",
        error: "Delete failed.",
      });
    },
  };
}
