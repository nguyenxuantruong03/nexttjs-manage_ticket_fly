"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { reasonCodeColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useDeleteReasonCode,
  useReasonCodes,
} from "@/hooks/catalog/reason/reason-code";
import { createReasonCodeHandlers } from "./features/handlers";
import { createReasonCodeActions } from "./features/actions";

const ReasonCode = () => {
  const router = useRouter();

  const deleteMutation = useDeleteReasonCode();
  const { data, isPending, error } = useReasonCodes();

  const handlers = createReasonCodeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createReasonCodeActions,
    deleteTitle: "Delete reason code",
    deleteDescription: "Are you sure you want to delete this reason code?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={reasonCodeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default ReasonCode;
