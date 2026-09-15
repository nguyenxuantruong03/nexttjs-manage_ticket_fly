"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useDeleteWhitelistEntry,
  useWhitelistEntries,
} from "@/hooks/commerce/risk-fraud/whitelist-entry";

import { whitelistEntryColumns } from "./components/columns";
import { createWhitelistEntryActions } from "./features/actions";
import { createWhitelistEntryHandlers } from "./features/handlers";

const WhitelistEntry = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteWhitelistEntry();

  const { data, isPending, isFetching, error } = useWhitelistEntries(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

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
        persistKey="whitelist-entry"
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

export default WhitelistEntry;
