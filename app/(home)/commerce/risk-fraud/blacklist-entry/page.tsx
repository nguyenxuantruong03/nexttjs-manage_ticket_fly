"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { blacklistEntryColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createBlacklistEntryActions } from "./features/actions";

import { createBlacklistEntryHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import {
  useBlacklistEntries,
  useDeleteBlacklistEntry,
} from "@/hooks/commerce/risk-fraud/blacklist-entry";

const BlacklistEntry = () => {
  const router = useRouter();

  const deleteMutation = useDeleteBlacklistEntry();

  const { data, isPending, error } = useBlacklistEntries();

  const handlers = createBlacklistEntryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createBlacklistEntryActions,
    deleteTitle: "Delete blacklist entry",
    deleteDescription: "Are you sure you want to delete this blacklist entry?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={blacklistEntryColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default BlacklistEntry;
