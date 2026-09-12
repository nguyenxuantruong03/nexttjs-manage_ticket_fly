"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table/data-table";

import { flyDelayReasonColumns } from "./components/columns";

import { createFlyDelayReasonActions } from "./features/actions";

import {
  useDeleteFlyDelayReason,
  useFlyDelayReasons,
} from "@/hooks/product-types/ticket-fly/delay-reason";

import { createFlyDelayReasonHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const FlyDelayReasonPage = () => {
  const deleteMutation = useDeleteFlyDelayReason();

  const { data, isPending, error } = useFlyDelayReasons();

  const router = useRouter();

  const handlers = createFlyDelayReasonHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createFlyDelayReasonActions,

    deleteTitle: "Delete fly delay reason",

    deleteDescription: "Are you sure you want to delete this fly delay reason?",
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
        columns={flyDelayReasonColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyDelayReasonPage;
