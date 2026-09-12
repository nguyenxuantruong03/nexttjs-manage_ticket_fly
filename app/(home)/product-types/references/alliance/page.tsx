"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table/data-table";

import { flyAllianceColumns } from "./components/columns";

import { createFlyAllianceActions } from "./features/actions";

import {
  useDeleteFlyAlliance,
  useFlyAlliances,
} from "@/hooks/product-types/references/alliance";

import { createFlyAllianceHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const FlyAlliancePage = () => {
  const deleteMutation = useDeleteFlyAlliance();

  const { data, isPending, error } = useFlyAlliances();

  const router = useRouter();

  const handlers = createFlyAllianceHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFlyAllianceActions,
    deleteTitle: "Delete fly alliance",
    deleteDescription: "Are you sure you want to delete this fly alliance?",
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
        columns={flyAllianceColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyAlliancePage;
