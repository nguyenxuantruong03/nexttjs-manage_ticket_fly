import { useDeleteHotelAccessibility } from "@/hooks/product-types/hotel/hotel-accessibility";
import { AccessibilityRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteHotelAccessibility>;
}

export function createAccessibilityHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(AccessibilityRoutes.detail(id));
    },

    update(id: string) {
      router.push(AccessibilityRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting accessibility...",
        success: "Accessibility deleted.",
        error: "Delete failed.",
      });
    },
  };
}
