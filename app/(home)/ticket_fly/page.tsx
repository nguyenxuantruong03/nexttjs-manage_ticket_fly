"use client";
import { DataTable } from "@/components/ui/data-table";
import { ticketFlyColumns } from "./components/columns";
import { useDeleteTicketFly, useTicketsFly } from "@/hooks/ticket-fly";
import { useRouter } from "next/navigation";
import { createTicketFlyHandlers } from "./features/handlers";
import { createTicketFlyActions } from "./features/actions";

const TicletFly = () => {
  const deleteMutation = useDeleteTicketFly();
  const { data, isPending, error } = useTicketsFly();
  const router = useRouter();

  const handlers = createTicketFlyHandlers({
    router,
    deleteMutation,
  });

  const actions = createTicketFlyActions({
    onView: handlers.view,
    onEdit: handlers.edit,
    onDelete: handlers.delete,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }
  return <DataTable columns={ticketFlyColumns(actions)} data={data} />;
};

export default TicletFly;
