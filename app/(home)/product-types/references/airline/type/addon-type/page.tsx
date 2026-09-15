"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useDeleteFlyAddonType,
  useFlyAddonTypes,
} from "@/hooks/product-types/references/airline/addon-type";

import { flyAddonTypeColumns } from "./components/columns";
import { createFlyAddonTypeActions } from "./features/actions";
import { createFlyAddonTypeHandlers } from "./features/handlers";

const FlyAddonTypePage = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteFlyAddonType();

  const { data, isPending, isFetching, error } = useFlyAddonTypes(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createFlyAddonTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFlyAddonTypeActions,
    deleteTitle: "Delete fly addon type",
    deleteDescription: "Are you sure you want to delete this fly addon type?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={flyAddonTypeColumns(actions)}
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
        persistKey="fly-addon-type"
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

export default FlyAddonTypePage;
