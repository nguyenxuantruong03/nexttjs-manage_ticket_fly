import { useDeleteFlyCabinClass } from "@/hooks/product-types/ticket-fly/cabin-class";

import { FlyCabinClassRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";


interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteFlyCabinClass>;
}


export function createFlyCabinClassHandlers({
  router,
  deleteMutation,
}: Props) {

  return {

    view(id: string) {
      router.push(
        FlyCabinClassRoutes.detail(id),
      );
    },


    update(id: string) {
      router.push(
        FlyCabinClassRoutes.update(id),
      );
    },


    async delete(id: string) {

      await toast.promise(
        deleteMutation.mutateAsync(id),
        {
          loading: "Deleting fly cabin class...",
          success: "Fly cabin class deleted.",
          error: "Delete failed.",
        },
      );

    },

  };
}