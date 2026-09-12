"use client";
import { DataTable } from "@/components/ui/data-table/data-table";
import {
  useDeleteTicketFly,
  useTicketsFly,
} from "@/hooks/product-types/ticket-fly";
import { useRouter } from "next/navigation";
import { createTicketFlyHandlers } from "./features/handlers";
import { createTicketFlyActions } from "./features/actions";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { ticketFlyColumns } from "./components/columns";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const TicletFly = () => {
  const deleteMutation = useDeleteTicketFly();
  const { data, isPending, error } = useTicketsFly();
  const router = useRouter();

  const handlers = createTicketFlyHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createTicketFlyActions,
    deleteTitle: "Delete ticket fly",
    deleteDescription: "Are you sure you want to delete this ticket fly?",
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
        columns={ticketFlyColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default TicletFly;
