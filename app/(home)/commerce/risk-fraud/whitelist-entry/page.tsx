"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import {
  useDeleteWhitelistEntry,
  useWhitelistEntries,
} from "@/hooks/commerce/risk-fraud/whitelist-entry";
import { createWhitelistEntryHandlers } from "./features/handlers";
import { whitelistEntryColumns } from "./components/columns";
import { createWhitelistEntryActions } from "./features/actions";

const WhitelistEntry = () => {
  const router = useRouter();

  const deleteMutation = useDeleteWhitelistEntry();

  const { data, isPending, error } = useWhitelistEntries();

  const handlers = createWhitelistEntryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createWhitelistEntryActions,
    deleteTitle: "Delete whitelist entry",
    deleteDescription: "Are you sure you want to delete this whitelist entry?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={whitelistEntryColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default WhitelistEntry;
