"use client";
import { airportTransferColumns } from "./components/columns";
import { DataTable } from "@/components/ui/data-table";
import {
  useAirportTransfers,
  useDeleteAirportTransfer,
} from "@/hooks/airport-transfer";
import { useRouter } from "next/navigation";
import { createAirportTransferActions } from "./features/actions";
import { createAirportTransferHandlers } from "./features/handlers";

const AirportTransferPage = () => {
  const deleteMutation = useDeleteAirportTransfer();
  const { data = [], isPending, error } = useAirportTransfers();
  const router = useRouter();

  const handlers = createAirportTransferHandlers({
    router,
    deleteMutation,
  });

  const actions = createAirportTransferActions({
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
  return <DataTable columns={airportTransferColumns(actions)} data={data} />;
};

export default AirportTransferPage;
