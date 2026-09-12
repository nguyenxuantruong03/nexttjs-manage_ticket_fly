"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table/data-table";

import { flyAircraftColumns } from "./components/columns";

import { createFlyAircraftActions } from "./features/actions";

import {
  useDeleteFlyAircraft,
  useFlyAircrafts,
} from "@/hooks/product-types/references/airline/aircraft";

import { createFlyAircraftHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";

import LoadingPage from "@/components/ui/loading-page";

const FlyAircraftPage = () => {
  const deleteMutation = useDeleteFlyAircraft();

  const { data, isPending, error } = useFlyAircrafts();

  const router = useRouter();

  const handlers = createFlyAircraftHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFlyAircraftActions,
    deleteTitle: "Delete fly aircraft",
    deleteDescription: "Are you sure you want to delete this fly aircraft?",
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
        columns={flyAircraftColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyAircraftPage;
