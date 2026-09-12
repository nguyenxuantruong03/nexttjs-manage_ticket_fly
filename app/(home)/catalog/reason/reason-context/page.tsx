"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { reasonContextColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createReasonContextActions } from "./features/actions";
import { createReasonContextHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useDeleteReasonContext,
  useReasonContexts,
} from "@/hooks/catalog/reason/reason-context";

const ReasonContext = () => {
  const router = useRouter();

  const deleteMutation = useDeleteReasonContext();
  const { data, isPending, error } = useReasonContexts();

  const handlers = createReasonContextHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createReasonContextActions,
    deleteTitle: "Delete reason context",
    deleteDescription: "Are you sure you want to delete this reason context?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={reasonContextColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default ReasonContext;
