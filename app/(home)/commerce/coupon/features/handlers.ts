import toast from "react-hot-toast";

import { CouponRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteCoupon } from "@/hooks/commerce/coupon";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteCoupon>;
}

export function createCouponHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(CouponRoutes.detail(id));
    },

    update(id: string) {
      router.push(CouponRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting coupon...",
        success: "Coupon deleted.",
        error: "Delete failed.",
      });
    },
  };
}