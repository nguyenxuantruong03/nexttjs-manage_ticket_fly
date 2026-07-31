import { useDeleteHotelPolicy } from "@/hooks/hotel/hotel-policy";
import { PolicyRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelPolicy>;
}

export function createPolicyHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(PolicyRoutes.detail(id));
    },

    update(id: string) {
      router.push(PolicyRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting policy...",
        success: "Policy deleted.",
        error: "Delete failed.",
      });
    },
  };
}
