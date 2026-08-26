import toast from "react-hot-toast";

import { PackageRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useDeletePackage } from "@/hooks/commerce/package";

interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeletePackage>;
}

export function createPackageHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(PackageRoutes.detail(id));
    },

    update(id: string) {
      router.push(PackageRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting package...",
        success: "Package deleted.",
        error: "Delete failed.",
      });
    },
  };
}