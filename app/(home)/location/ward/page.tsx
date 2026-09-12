"use client";

import { useWards, useDeleteWard } from "@/hooks/location/ward";
import { useRouter } from "next/navigation";
import { createWardHandlers } from "./features/handlers";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { createWardActions } from "./features/actions";
import { DataTable } from "@/components/ui/data-table/data-table";
import { wardColumns } from "./components/columns";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const WardPage = () => {
  const deleteMutation = useDeleteWard();
  const { data, isPending, error } = useWards();
  const router = useRouter();

  const handlers = createWardHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createWardActions,
    deleteTitle: "Delete Ward",
    deleteDescription: "Are you sure you want to delete this Ward?",
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
        columns={wardColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default WardPage;
