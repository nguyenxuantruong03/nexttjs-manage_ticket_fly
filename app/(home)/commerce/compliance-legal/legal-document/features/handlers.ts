import toast from "react-hot-toast";

import { LegalDocumentRoutes } from "./routes";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDeleteLegalDocument } from "@/hooks/commerce/compliance-legal/legal-document";


interface Props {
  router: AppRouterInstance;

  deleteMutation: ReturnType<typeof useDeleteLegalDocument>;
}

export function createLegalDocumentHandlers({
  router,
  deleteMutation,
}: Props) {
  return {
    view(id: string) {
      router.push(LegalDocumentRoutes.detail(id));
    },

    update(id: string) {
      router.push(LegalDocumentRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting legal document...",
        success: "Legal document deleted.",
        error: "Delete failed.",
      });
    },
  };
}
