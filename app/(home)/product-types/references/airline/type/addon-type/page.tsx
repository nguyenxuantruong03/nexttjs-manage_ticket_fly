"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";

import { flyAddonTypeColumns } from "./components/columns";
import { createFlyAddonTypeActions } from "./features/actions";

import {
  useDeleteFlyAddonType,
  useFlyAddonTypes,
} from "@/hooks/product-types/references/airline/addon-type";

import { createFlyAddonTypeHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const FlyAddonTypePage = () => {
  const deleteMutation = useDeleteFlyAddonType();
  const { data, isPending, error } = useFlyAddonTypes();
  const router = useRouter();

  const handlers = createFlyAddonTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFlyAddonTypeActions,
    deleteTitle: "Delete fly addon type",
    deleteDescription: "Are you sure you want to delete this fly addon type?",
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
        columns={flyAddonTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyAddonTypePage;
