"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useDeleteHotelRoomType,
  useHotelRoomTypes,
} from "@/hooks/product-types/hotel/hotel-room-type";

import { roomTypeColumns } from "./components/columns";
import { createRoomTypeHandlers } from "./features/handlers";
import { createRoomTypeActions } from "./features/actions";

const RoomTypePage = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteHotelRoomType();

  const { data, isPending, isFetching, error } = useHotelRoomTypes(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createRoomTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createRoomTypeActions,
    deleteTitle: "Delete roomType",
    deleteDescription: "Are you sure you want to delete this roomType?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={roomTypeColumns(actions)}
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
        persistKey="hotel-room-type"
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

export default RoomTypePage;
