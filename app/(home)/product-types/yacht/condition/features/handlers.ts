import { useDeleteYachtCondition } from "@/hooks/product-types/yacht/condition";
import { YachtConditionRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteYachtCondition>;
}

export function createYachtConditionHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(YachtConditionRoutes.detail(id));
    },

    update(id: string) {
      router.push(YachtConditionRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting yacht condition...",
        success: "Yacht condition deleted.",
        error: "Delete failed.",
      });
    },
  };
}