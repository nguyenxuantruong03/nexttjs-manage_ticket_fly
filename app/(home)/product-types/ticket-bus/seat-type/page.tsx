"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { busSeatTypeColumns } from "./components/columns";

import { createBusSeatTypeHandlers } from "./features/handlers";
import { createBusSeatTypeActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useBusSeatTypes,
  useDeleteBusSeatType,
} from "@/hooks/product-types/bus/seat-type";

const BusSeatTypePage = () => {
  const deleteMutation = useDeleteBusSeatType();
  const { data, isPending, error } = useBusSeatTypes();
  const router = useRouter();

  const handlers = createBusSeatTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createBusSeatTypeActions,
    deleteTitle: "Delete bus seat type",
    deleteDescription: "Are you sure you want to delete this bus seat type?",
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
        columns={busSeatTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default BusSeatTypePage;
