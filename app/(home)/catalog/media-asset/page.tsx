"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import {
  useDeleteMediaAsset,
  useMediaAssets,
} from "@/hooks/catalog/media-asset";

import { mediaAssetColumns } from "./components/columns";

import { createMediaAssetActions } from "./features/actions";
import { createMediaAssetHandlers } from "./features/handlers";

const MediaAsset = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteMediaAsset();

  const { data, isPending, isFetching, error } = useMediaAssets(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createMediaAssetHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createMediaAssetActions,
    deleteTitle: "Delete media asset",
    deleteDescription: "Are you sure you want to delete this media asset?",
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
        columns={mediaAssetColumns(actions)}
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
        persistKey="media-asset"
        searchableFields={["path"]}
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

export default MediaAsset;
