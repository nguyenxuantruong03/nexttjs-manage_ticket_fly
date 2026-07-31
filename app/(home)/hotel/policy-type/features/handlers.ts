import { useDeleteHotelPolicyType } from "@/hooks/hotel/hotel-policy-type";
import { PolicyTypeRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelPolicyType>;
}

export function createPolicyTypeHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(PolicyTypeRoutes.detail(id));
    },

    update(id: string) {
      router.push(PolicyTypeRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting policy type...",
        success: "PolicyType deleted.",
        error: "Delete failed.",
      });
    },
  };
}
