"use client";

import { useLanguages, useDeleteLanguage } from "@/hooks/location/language";
import { useRouter } from "next/navigation";
import { createLanguageHandlers } from "./features/handlers";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { createLanguageActions } from "./features/actions";
import { DataTable } from "@/components/ui/data-table/data-table";
import { languageColumns } from "./components/columns";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const LanguagePage = () => {
  const deleteMutation = useDeleteLanguage();
  const { data, isPending, error } = useLanguages();
  const router = useRouter();

  const handlers = createLanguageHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createLanguageActions,
    deleteTitle: "Delete Language",
    deleteDescription: "Are you sure you want to delete this Language?",
  });

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {deleteDialog.dialog}
      <DataTable
        columns={languageColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default LanguagePage;
