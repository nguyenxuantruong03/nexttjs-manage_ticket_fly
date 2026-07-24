"use client";
import { DataTable } from "@/components/ui/data-table";
import { ticketFlyColumns } from "./components/columns";
import { useDeleteTicketFly, useTicketsFly } from "@/hooks/ticket-fly";
import { useRouter } from "next/navigation";
import { createTicketFlyHandlers } from "./features/handlers";
import { createTicketFlyActions } from "./features/actions";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
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
