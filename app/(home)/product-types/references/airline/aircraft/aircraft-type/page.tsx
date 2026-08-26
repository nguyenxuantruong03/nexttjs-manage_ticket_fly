"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table";

import { flyAircraftTypeColumns } from "./components/columns";

import { createFlyAircraftTypeActions } from "./features/actions";

import { createFlyAircraftTypeHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";

import LoadingPage from "@/components/ui/loading-page";
import {
  useDeleteFlyAircraftType,
  useFlyAircraftTypes,
} from "@/hooks/product-types/references/airline/aircraft/aircraft-type";

const FlyAircraftTypePage = () => {
  const deleteMutation = useDeleteFlyAircraftType();

  const { data, isPending, error } = useFlyAircraftTypes();

  const router = useRouter();

  const handlers = createFlyAircraftTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFlyAircraftTypeActions,
    deleteTitle: "Delete fly aircraft type",
    deleteDescription:
      "Are you sure you want to delete this fly aircraft type?",
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
        columns={flyAircraftTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyAircraftTypePage;
