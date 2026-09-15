"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import {
  useDeleteMediaCategory,
  useMediaCategories,
} from "@/hooks/catalog/media-category";

import { mediaCategoryColumns } from "./components/columns";

import { createMediaCategoryActions } from "./features/actions";
import { createMediaCategoryHandlers } from "./features/handlers";

const MediaCategory = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteMediaCategory();

  const { data, isPending, isFetching, error } = useMediaCategories(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createMediaCategoryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createMediaCategoryActions,
    deleteTitle: "Delete media category",
    deleteDescription: "Are you sure you want to delete this media category?",
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
        columns={mediaCategoryColumns(actions)}
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
        persistKey="media-category"
        searchableFields={["name", "slug"]}
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

export default MediaCategory;
