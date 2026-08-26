"use client";

import { DataTable } from "@/components/ui/data-table";

import {
  useContinents,
  useDeleteContinent,
} from "@/hooks/location/country/continent";

import { continentColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { createContinentHandlers } from "./features/handlers";

import { createContinentActions } from "./features/actions";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const ContinentPage = () => {
  const deleteMutation = useDeleteContinent();

  const { data, isPending, error } = useContinents();

  const router = useRouter();

  const handlers = createContinentHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createContinentActions,
    deleteTitle: "Delete continent",
    deleteDescription: "Are you sure you want to delete this continent?",
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
        columns={continentColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default ContinentPage;
