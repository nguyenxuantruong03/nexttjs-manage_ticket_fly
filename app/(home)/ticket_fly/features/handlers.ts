import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { TicketFlyRoutes } from "./routes";
import { useDeleteTicketFly } from "@/hooks/ticket-fly";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteTicketFly>;
}

export function createTicketFlyHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(TicketFlyRoutes.detail(id));
    },

    update(id: string) {
      router.push(TicketFlyRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting Ticket fly...",
        success: "Ticket fly deleted.",
        error: "Delete failed.",
      });
    },
  };
}
