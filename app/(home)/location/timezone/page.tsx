"use client";

import { useTimezones, useDeleteTimezone } from "@/hooks/location/timezone";
import { useRouter } from "next/navigation";
import { createTimezoneHandlers } from "./features/handlers";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { createTimezoneActions } from "./features/actions";
import { DataTable } from "@/components/ui/data-table/data-table";
import { timezoneColumns } from "./components/columns";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const TimezonePage = () => {
  const deleteMutation = useDeleteTimezone();
  const { data, isPending, error } = useTimezones();
  const router = useRouter();

  const handlers = createTimezoneHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createTimezoneActions,
    deleteTitle: "Delete Timezone",
    deleteDescription: "Are you sure you want to delete this Timezone?",
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
        columns={timezoneColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default TimezonePage;
