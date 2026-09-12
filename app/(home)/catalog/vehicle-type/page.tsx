"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { vehicleTypeColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createVehicleTypeActions } from "./features/actions";
import { createVehicleTypeHandlers } from "./features/handlers";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useDeleteVehicleType,
  useVehicleTypes,
} from "@/hooks/catalog/vehicle-type";

const VehicleType = () => {
  const router = useRouter();

  const deleteMutation = useDeleteVehicleType();
  const { data, isPending, error } = useVehicleTypes();

  const handlers = createVehicleTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createVehicleTypeActions,
    deleteTitle: "Delete vehicle type",
    deleteDescription: "Are you sure you want to delete this vehicle type?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={vehicleTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default VehicleType;
