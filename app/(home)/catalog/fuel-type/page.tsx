"use client";

import { DataTable } from "@/components/ui/data-table";
import { fuelTypeColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createFuelTypeActions } from "./features/actions";
import { createFuelTypeHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteFuelType,
  useFuelTypes,
} from "@/hooks/catalog/fuel-type";

const FuelType = () => {
  const router = useRouter();

  const deleteMutation = useDeleteFuelType();
  const { data, isPending, error } = useFuelTypes();

  const handlers = createFuelTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFuelTypeActions,
    deleteTitle: "Delete fuel type",
    deleteDescription:
      "Are you sure you want to delete this fuel type?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={fuelTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FuelType;