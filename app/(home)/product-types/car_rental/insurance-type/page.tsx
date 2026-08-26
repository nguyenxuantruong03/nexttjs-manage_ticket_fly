"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";

import { createCarRentalInsuranceTypeHandlers } from "./features/handlers";
import { createCarRentalInsuranceTypeActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useCarRentalInsuranceTypes,
  useDeleteCarRentalInsuranceType,
} from "@/hooks/product-types/car-rental/insurance-type";
import { carRentalInsuranceTypeColumns } from "./components/columns";

const CarRentalInsuranceTypePage = () => {
  const deleteMutation = useDeleteCarRentalInsuranceType();
  const { data, isPending, error } = useCarRentalInsuranceTypes();
  const router = useRouter();

  const handlers = createCarRentalInsuranceTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCarRentalInsuranceTypeActions,
    deleteTitle: "Delete car rental insurance type",
    deleteDescription:
      "Are you sure you want to delete this car rental insurance type?",
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
        columns={carRentalInsuranceTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default CarRentalInsuranceTypePage;
