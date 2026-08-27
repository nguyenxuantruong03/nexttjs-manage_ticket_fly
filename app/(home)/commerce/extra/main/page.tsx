"use client";

import { DataTable } from "@/components/ui/data-table";

import { extraColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createExtraActions } from "./features/actions";

import { createExtraHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteExtra,
  useExtras,
} from "@/hooks/commerce/extra";

const Extra = () => {
  const router = useRouter();

  const deleteMutation = useDeleteExtra();

  const { data, isPending, error } = useExtras();

  const handlers = createExtraHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createExtraActions,
    deleteTitle: "Delete extra",
    deleteDescription: "Are you sure you want to delete this extra?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={extraColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default Extra;