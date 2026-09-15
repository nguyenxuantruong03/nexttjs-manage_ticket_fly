"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useDeleteYachtCondition,
  useYachtConditions,
} from "@/hooks/product-types/yacht/condition";

import { yachtConditionColumns } from "./components/columns";
import { createYachtConditionActions } from "./features/actions";
import { createYachtConditionHandlers } from "./features/handlers";

const YachtConditionPage = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteYachtCondition();

  const { data, isPending, isFetching, error } = useYachtConditions(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createYachtConditionHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createYachtConditionActions,
    deleteTitle: "Delete yacht condition",
    deleteDescription: "Are you sure you want to delete this yacht condition?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={yachtConditionColumns(actions)}
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
        persistKey="yacht-condition"
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

export default YachtConditionPage;
