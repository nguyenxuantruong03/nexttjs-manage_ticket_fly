"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table";

import { flyAirlineColumns } from "./components/columns";

import { createFlyAirlineActions } from "./features/actions";

import {
  useDeleteFlyAirline,
  useFlyAirlines,
} from "@/hooks/product-types/references/airline";

import { createFlyAirlineHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";

import LoadingPage from "@/components/ui/loading-page";

const FlyAirlinePage = () => {
  const deleteMutation = useDeleteFlyAirline();

  const { data, isPending, error } = useFlyAirlines();

  const router = useRouter();

  const handlers = createFlyAirlineHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFlyAirlineActions,
    deleteTitle: "Delete fly airline",
    deleteDescription:
      "Are you sure you want to delete this fly airline?",
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
        columns={flyAirlineColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyAirlinePage;