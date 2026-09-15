"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useCarRentalInsuranceTypes,
  useDeleteCarRentalInsuranceType,
} from "@/hooks/product-types/car-rental/insurance-type";

import { carRentalInsuranceTypeColumns } from "./components/columns";
import { createCarRentalInsuranceTypeActions } from "./features/actions";
import { createCarRentalInsuranceTypeHandlers } from "./features/handlers";

const CarRentalInsuranceTypePage = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteCarRentalInsuranceType();

  const { data, isPending, isFetching, error } = useCarRentalInsuranceTypes(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createCarRentalInsuranceTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCarRentalInsuranceTypeActions,
    deleteTitle: "Delete car rental insurance type",
    deleteDescription:
      "Are you sure you want to delete this car rental insurance type?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={carRentalInsuranceTypeColumns(actions)}
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
        persistKey="car-rental-insurance-type"
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

export default CarRentalInsuranceTypePage;
