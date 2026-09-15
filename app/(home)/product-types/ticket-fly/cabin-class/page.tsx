"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useDeleteFlyCabinClass,
  useFlyCabinClasses,
} from "@/hooks/product-types/ticket-fly/cabin-class";

import { flyCabinClassColumns } from "./components/columns";
import { createFlyCabinClassActions } from "./features/actions";
import { createFlyCabinClassHandlers } from "./features/handlers";

const FlyCabinClassPage = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteFlyCabinClass();

  const { data, isPending, isFetching, error } = useFlyCabinClasses(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createFlyCabinClassHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFlyCabinClassActions,
    deleteTitle: "Delete fly cabin class",
    deleteDescription: "Are you sure you want to delete this fly cabin class?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={flyCabinClassColumns(actions)}
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
        persistKey="fly-cabin-class"
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

export default FlyCabinClassPage;
