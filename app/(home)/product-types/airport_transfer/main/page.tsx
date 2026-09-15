"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useAirportTransfers,
  useDeleteAirportTransfer,
} from "@/hooks/product-types/airport-transfer";

import { airportTransferColumns } from "./components/columns";
import { createAirportTransferActions } from "./features/actions";
import { createAirportTransferHandlers } from "./features/handlers";

const AirportTransferPage = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteAirportTransfer();

  const { data, isPending, isFetching, error } = useAirportTransfers(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createAirportTransferHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createAirportTransferActions,
    deleteTitle: "Delete airport-transfer",
    deleteDescription: "Are you sure you want to delete this airport-transfer?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={airportTransferColumns(actions)}
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
        persistKey="airport-transfer"
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

export default AirportTransferPage;
