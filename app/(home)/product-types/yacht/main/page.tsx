"use client";
import { DataTable } from "@/components/ui/data-table/data-table";
import { yachtColumns } from "./components/columns";
import { useDeleteYacht, useYachts } from "@/hooks/product-types/yacht";
import { useRouter } from "next/navigation";
import { createYachtHandlers } from "./features/handlers";
import { createYachtActions } from "./features/actions";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const YatchPage = () => {
  const deleteMutation = useDeleteYacht();
  const { data, isPending, error } = useYachts();
  const router = useRouter();

  const handlers = createYachtHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createYachtActions,
    deleteTitle: "Delete yacht",
    deleteDescription: "Are you sure you want to delete this yacht?",
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
        columns={yachtColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default YatchPage;
