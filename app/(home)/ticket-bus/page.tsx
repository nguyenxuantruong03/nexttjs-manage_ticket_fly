"use client";
import { DataTable } from "@/components/ui/data-table";
import { ticketBusColumns } from "./components/columns";
import { useBuses, useDeleteBus } from "@/hooks/bus";
import { useRouter } from "next/navigation";
import { createBusActions } from "./features/actions";
import { createBusHandlers } from "./features/handlers";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const TicketBusPage = () => {
  const deleteMutation = useDeleteBus();
  const { data, isPending, error } = useBuses();
  const router = useRouter();

  const handlers = createBusHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createBusActions,
    deleteTitle: "Delete ticket bus",
    deleteDescription: "Are you sure you want to delete this ticket bus?",
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
        columns={ticketBusColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default TicketBusPage;
