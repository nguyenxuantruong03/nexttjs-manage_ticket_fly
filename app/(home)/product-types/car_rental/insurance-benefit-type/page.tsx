"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";

import { createCarRentalInsuranceBenefitTypeHandlers } from "./features/handlers";
import { createCarRentalInsuranceBenefitTypeActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useCarRentalInsuranceBenefitTypes,
  useDeleteCarRentalInsuranceBenefitType,
} from "@/hooks/product-types/car-rental/insurance-benefit-type";
import { carRentalInsuranceBenefitTypeColumns } from "./components/columns";

const CarRentalInsuranceBenefitTypePage = () => {
  const deleteMutation = useDeleteCarRentalInsuranceBenefitType();
  const { data, isPending, error } =
    useCarRentalInsuranceBenefitTypes();
  const router = useRouter();

  const handlers = createCarRentalInsuranceBenefitTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCarRentalInsuranceBenefitTypeActions,
    deleteTitle: "Delete car rental insurance benefit type",
    deleteDescription:
      "Are you sure you want to delete this car rental insurance benefit type?",
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
        columns={carRentalInsuranceBenefitTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default CarRentalInsuranceBenefitTypePage;