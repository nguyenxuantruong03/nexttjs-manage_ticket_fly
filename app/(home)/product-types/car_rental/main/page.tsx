"use client";
import { DataTable } from "@/components/ui/data-table";
import { carRentalColumns } from "./components/columns";
import {
  useCarRentals,
  useDeleteCarRental,
} from "@/hooks/product-types/car-rental";
import { useRouter } from "next/navigation";
import { createCarRentalActions } from "./features/actions";
import { createCarrentalHandlers } from "./features/handlers";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const CarrentalPage = () => {
  const deleteMutation = useDeleteCarRental();
  const { data, isPending, error } = useCarRentals();
  const router = useRouter();

  const handlers = createCarrentalHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCarRentalActions,
    deleteTitle: "Delete car rental",
    deleteDescription: "Are you sure you want to delete this car rental?",
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
        columns={carRentalColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default CarrentalPage;
