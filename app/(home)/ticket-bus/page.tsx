"use client";
import { DataTable } from "@/components/ui/data-table";
import { ticketBusColumns } from "./components/columns";
import { useBuses, useDeleteBus } from "@/hooks/bus";
import { useRouter } from "next/navigation";
import { createBusActions } from "./features/actions";
import { createBusHandlers } from "./features/handlers";

const TicketBusPage = () => {
  const deleteMutation = useDeleteBus();
  const { data, isPending, error } = useBuses();
  const router = useRouter();

  const handlers = createBusHandlers({
    router,
    deleteMutation,
  });

  const actions = createBusActions({
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
  return <DataTable columns={ticketBusColumns(actions)} data={data} />;
};

export default TicketBusPage;
