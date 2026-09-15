"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import {
  useDeleteVehicleType,
  useVehicleTypes,
} from "@/hooks/catalog/vehicle-type";

import { vehicleTypeColumns } from "./components/columns";

import { createVehicleTypeActions } from "./features/actions";
import { createVehicleTypeHandlers } from "./features/handlers";

const VehicleType = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteVehicleType();

  const { data, isPending, isFetching, error } = useVehicleTypes(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createVehicleTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createVehicleTypeActions,
    deleteTitle: "Delete vehicle type",
    deleteDescription: "Are you sure you want to delete this vehicle type?",
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
        columns={vehicleTypeColumns(actions)}
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
        persistKey="vehicle-type"
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

export default VehicleType;
