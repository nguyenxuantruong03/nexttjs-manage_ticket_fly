"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table";

import { flyCrewDutyColumns } from "./components/columns";

import { createFlyCrewDutyActions } from "./features/actions";

import {
  useDeleteFlyCrewDuty,
  useFlyCrewDuties,
} from "@/hooks/product-types/references/airline/crew/crew-duty";

import { createFlyCrewDutyHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const FlyCrewDutyPage = () => {
  const deleteMutation = useDeleteFlyCrewDuty();

  const { data, isPending, error } = useFlyCrewDuties();

  const router = useRouter();

  const handlers = createFlyCrewDutyHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createFlyCrewDutyActions,

    deleteTitle: "Delete fly crew duty",

    deleteDescription: "Are you sure you want to delete this fly crew duty?",
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
        columns={flyCrewDutyColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyCrewDutyPage;
