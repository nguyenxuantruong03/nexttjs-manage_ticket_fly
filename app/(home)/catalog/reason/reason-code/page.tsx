"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import {
  useDeleteReasonCode,
  useReasonCodes,
} from "@/hooks/catalog/reason/reason-code";

import { reasonCodeColumns } from "./components/columns";

import { createReasonCodeHandlers } from "./features/handlers";
import { createReasonCodeActions } from "./features/actions";

const ReasonCode = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteReasonCode();

  const { data, isPending, isFetching, error } = useReasonCodes(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createReasonCodeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createReasonCodeActions,
    deleteTitle: "Delete reason code",
    deleteDescription: "Are you sure you want to delete this reason code?",
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
        columns={reasonCodeColumns(actions)}
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
        persistKey="reason-code"
        searchableFields={["title", "code"]}
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

export default ReasonCode;
