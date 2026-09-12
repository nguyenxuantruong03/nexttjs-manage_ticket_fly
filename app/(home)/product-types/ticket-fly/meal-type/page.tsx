"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table/data-table";

import { flyMealTypeColumns } from "./components/columns";

import { createFlyMealTypeActions } from "./features/actions";

import {
  useDeleteFlyMealType,
  useFlyMealTypes,
} from "@/hooks/product-types/ticket-fly/meal-type";

import { createFlyMealTypeHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const FlyMealTypePage = () => {
  const deleteMutation = useDeleteFlyMealType();

  const { data, isPending, error } = useFlyMealTypes();

  const router = useRouter();

  const handlers = createFlyMealTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createFlyMealTypeActions,

    deleteTitle: "Delete fly meal type",

    deleteDescription: "Are you sure you want to delete this fly meal type?",
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
        columns={flyMealTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyMealTypePage;
