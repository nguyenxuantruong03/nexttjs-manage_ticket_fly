"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { useCurrencies, useDeleteCurrency } from "@/hooks/location/currency";

import { currencyColumns } from "./components/columns";
import { createCurrencyActions } from "./features/actions";
import { createCurrencyHandlers } from "./features/handlers";

const Currency = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteCurrency();

  const { data, isPending, isFetching, error } = useCurrencies(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createCurrencyHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCurrencyActions,
    deleteTitle: "Delete currency",
    deleteDescription: "Are you sure you want to delete this currency?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={currencyColumns(actions)}
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
        persistKey="currency"
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

export default Currency;
