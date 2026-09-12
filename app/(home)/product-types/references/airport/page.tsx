"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table/data-table";
import { flyAirportColumns } from "./components/columns";
import { createFlyAirportActions } from "./features/actions";
import {
  useDeleteFlyAirport,
  useFliesAirport,
} from "@/hooks/product-types/references/airport";
import { createFlyAirportHandlers } from "./features/handlers";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const FlyAirportPage = () => {
  const deleteMutation = useDeleteFlyAirport();
  const { data, isPending, error } = useFliesAirport();
  const router = useRouter();

  const handlers = createFlyAirportHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFlyAirportActions,
    deleteTitle: "Delete fly airport",
    deleteDescription: "Are you sure you want to delete this fly airport?",
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
        columns={flyAirportColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyAirportPage;
