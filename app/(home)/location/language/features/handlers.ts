import { useDeleteLanguage } from "@/hooks/location/language";
import { LanguageRoutes } from "./routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface Props {
  router: AppRouterInstance;
  deleteMutation: ReturnType<typeof useDeleteLanguage>;
}

export function createLanguageHandlers({ router, deleteMutation }: Props) {
  return {
    view(id: string) {
      router.push(LanguageRoutes.detail(id));
    },

    update(id: string) {
      router.push(LanguageRoutes.update(id));
    },

    async delete(id: string) {
      await toast.promise(deleteMutation.mutateAsync(id), {
        loading: "Deleting language...",
        success: "Language deleted.",
        error: "Delete failed.",
      });
    },
  };
}
