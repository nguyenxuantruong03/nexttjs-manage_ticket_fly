"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useBlacklistEntries,
  useDeleteBlacklistEntry,
} from "@/hooks/commerce/risk-fraud/blacklist-entry";

import { blacklistEntryColumns } from "./components/columns";
import { createBlacklistEntryActions } from "./features/actions";
import { createBlacklistEntryHandlers } from "./features/handlers";

const BlacklistEntry = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteBlacklistEntry();

  const { data, isPending, isFetching, error } = useBlacklistEntries(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

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
        data={data?.data ?? []}
        isLoading={isPending}
        isFetching={isFetching}
        manualPagination
        pageCount={data?.meta.totalPages ?? 0}
        totalRows={data?.meta.total ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
        pageSizeOptions={[10, 20, 30, 50, 100]}
        persistKey="blacklist-entry"
        enableSorting
        enableColumnFilters
        enableResizing
        enablePinning
        enableExport
        onRowClick={({ id }) => handlers.view(id)}
      />
    </>
  );
};

export default BlacklistEntry;
