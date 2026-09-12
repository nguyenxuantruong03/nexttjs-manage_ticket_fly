"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { legalDocumentColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createLegalDocumentActions } from "./features/actions";

import { createLegalDocumentHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useDeleteLegalDocument, useLegalDocuments } from "@/hooks/commerce/compliance-legal/legal-document";



const LegalDocument = () => {
  const router = useRouter();

  const deleteMutation = useDeleteLegalDocument();

  const { data, isPending, error } = useLegalDocuments();

  const handlers = createLegalDocumentHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createLegalDocumentActions,

    deleteTitle: "Delete legal document",

    deleteDescription:
      "Are you sure you want to delete this legal document?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={legalDocumentColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default LegalDocument;
