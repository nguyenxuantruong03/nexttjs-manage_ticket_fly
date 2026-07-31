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
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const AirportTransferPage = () => {
  const deleteMutation = useDeleteAirportTransfer();
  const { data, isPending, error } = useAirportTransfers();
  const router = useRouter();

  const handlers = createAirportTransferHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createAirportTransferActions,
    deleteTitle: "Delete airport-transfer",
    deleteDescription: "Are you sure you want to delete this airport-transfer?",
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
        columns={airportTransferColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
      ;
    </>
  );
};

export default AirportTransferPage;
