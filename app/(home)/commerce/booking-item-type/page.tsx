"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import {
  useDeleteBookingItemType,
  useBookingItemTypes,
} from "@/hooks/commerce/booking-item-type";

import { bookingItemTypeColumns } from "./components/columns";

import { createBookingItemTypeActions } from "./features/actions";
import { createBookingItemTypeHandlers } from "./features/handlers";

const BookingItemType = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteBookingItemType();

  const { data, isPending, isFetching, error } = useBookingItemTypes(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createBookingItemTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createBookingItemTypeActions,
    deleteTitle: "Delete booking item type",
    deleteDescription:
      "Are you sure you want to delete this booking item type?",
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
        columns={bookingItemTypeColumns(actions)}
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
        persistKey="booking-item-type"
        searchableFields={["name"]}
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

export default BookingItemType;
