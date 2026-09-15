"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useBusSeatTypes,
  useDeleteBusSeatType,
} from "@/hooks/product-types/bus/seat-type";

import { busSeatTypeColumns } from "./components/columns";
import { createBusSeatTypeActions } from "./features/actions";
import { createBusSeatTypeHandlers } from "./features/handlers";

const BusSeatTypePage = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteBusSeatType();

  const { data, isPending, isFetching, error } = useBusSeatTypes(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createBusSeatTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createBusSeatTypeActions,
    deleteTitle: "Delete bus seat type",
    deleteDescription: "Are you sure you want to delete this bus seat type?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={busSeatTypeColumns(actions)}
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
        persistKey="bus-seat-type"
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

export default BusSeatTypePage;
