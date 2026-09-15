"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useDeleteFeatureFlag,
  useFeatureFlags,
} from "@/hooks/commerce/feature-flag";

import { featureFlagColumns } from "./components/columns";
import { createFeatureFlagActions } from "./features/actions";
import { createFeatureFlagHandlers } from "./features/handlers";

const FeatureFlag = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteFeatureFlag();

  const { data, isPending, isFetching, error } = useFeatureFlags(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createFeatureFlagHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFeatureFlagActions,
    deleteTitle: "Delete feature flag",
    deleteDescription: "Are you sure you want to delete this feature flag?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={featureFlagColumns(actions)}
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
        persistKey="feature-flag"
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

export default FeatureFlag;
