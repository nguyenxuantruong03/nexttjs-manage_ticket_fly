import { useDeleteAddress } from "@/hooks/location/address";
import { AddressRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteAddress>;
}

export function createAddressHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(AddressRoutes.detail(id));
    },

    update(id: string) {
      router.push(AddressRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting address...",
        success: "Address deleted.",
        error: "Delete failed.",
      });
    },
  };
}
