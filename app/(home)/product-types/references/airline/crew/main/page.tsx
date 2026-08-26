"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table";

import { flyCrewColumns } from "./components/columns";

import { createFlyCrewActions } from "./features/actions";

import { createFlyCrewHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";

import LoadingPage from "@/components/ui/loading-page";
import {
  useDeleteFlyCrew,
  useFlyCrews,
} from "@/hooks/product-types/references/airline/crew";

const FlyCrewPage = () => {
  const deleteMutation = useDeleteFlyCrew();

  const { data, isPending, error } = useFlyCrews();

  const router = useRouter();

  const handlers = createFlyCrewHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createFlyCrewActions,

    deleteTitle: "Delete fly crew",

    deleteDescription: "Are you sure you want to delete this fly crew?",
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
        columns={flyCrewColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyCrewPage;
