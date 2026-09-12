"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { extraTypeColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createExtraTypeActions } from "./features/actions";
import { createExtraTypeHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useDeleteExtraType, useExtraTypes } from "@/hooks/commerce/extra-type";

const ExtraType = () => {
  const router = useRouter();

  const deleteMutation = useDeleteExtraType();
  const { data, isPending, error } = useExtraTypes();

  const handlers = createExtraTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createExtraTypeActions,
    deleteTitle: "Delete extra type",
    deleteDescription: "Are you sure you want to delete this extra type?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={extraTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default ExtraType;
