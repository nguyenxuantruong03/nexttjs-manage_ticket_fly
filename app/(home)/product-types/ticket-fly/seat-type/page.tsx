"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table/data-table";

import { flySeatTypeColumns } from "./components/columns";

import { createFlySeatTypeActions } from "./features/actions";

import {
  useDeleteFlySeatType,
  useFlySeatTypes,
} from "@/hooks/product-types/ticket-fly/seat-type";

import { createFlySeatTypeHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const FlySeatTypePage = () => {
  const deleteMutation = useDeleteFlySeatType();

  const { data, isPending, error } = useFlySeatTypes();

  const router = useRouter();

  const handlers = createFlySeatTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createFlySeatTypeActions,

    deleteTitle: "Delete fly seat type",

    deleteDescription: "Are you sure you want to delete this fly seat type?",
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
        columns={flySeatTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlySeatTypePage;
