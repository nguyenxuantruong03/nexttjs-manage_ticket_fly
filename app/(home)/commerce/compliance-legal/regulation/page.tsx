"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { regulationColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createRegulationActions } from "./features/actions";

import { createRegulationHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteRegulation,
  useRegulations,
} from "@/hooks/commerce/compliance-legal/regulation";

const Regulation = () => {
  const router = useRouter();

  const deleteMutation = useDeleteRegulation();

  const { data, isPending, error } = useRegulations();

  const handlers = createRegulationHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createRegulationActions,
    deleteTitle: "Delete regulation",
    deleteDescription:
      "Are you sure you want to delete this regulation?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={regulationColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default Regulation;