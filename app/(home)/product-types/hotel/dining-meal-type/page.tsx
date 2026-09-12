"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table/data-table";

import { createDiningMealTypeHandlers } from "./features/handlers";
import { createDiningMealTypeActions } from "./features/actions";
import {
  useDeleteHotelDiningMealType,
  useHotelDiningMealTypes,
} from "@/hooks/product-types/hotel/hotel-dining-meal-type";
import { diningMealTypeColumns } from "./components/columns";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const DiningMealTypePage = () => {
  const deleteMutation = useDeleteHotelDiningMealType();
  const { data, isPending, error } = useHotelDiningMealTypes();
  const router = useRouter();

  const handlers = createDiningMealTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createDiningMealTypeActions,
    deleteTitle: "Delete diningMealType",
    deleteDescription: "Are you sure you want to delete this diningMealType?",
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
        columns={diningMealTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default DiningMealTypePage;
