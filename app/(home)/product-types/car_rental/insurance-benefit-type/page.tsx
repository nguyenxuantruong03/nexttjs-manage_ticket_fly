"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useCarRentalInsuranceBenefitTypes,
  useDeleteCarRentalInsuranceBenefitType,
} from "@/hooks/product-types/car-rental/insurance-benefit-type";

import { carRentalInsuranceBenefitTypeColumns } from "./components/columns";
import { createCarRentalInsuranceBenefitTypeActions } from "./features/actions";
import { createCarRentalInsuranceBenefitTypeHandlers } from "./features/handlers";

const CarRentalInsuranceBenefitTypePage = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeleteCarRentalInsuranceBenefitType();

  const { data, isPending, isFetching, error } =
    useCarRentalInsuranceBenefitTypes(
      pagination.pageIndex + 1,
      pagination.pageSize,
    );

  const handlers = createCarRentalInsuranceBenefitTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCarRentalInsuranceBenefitTypeActions,
    deleteTitle: "Delete car rental insurance benefit type",
    deleteDescription:
      "Are you sure you want to delete this car rental insurance benefit type?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={carRentalInsuranceBenefitTypeColumns(actions)}
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
        persistKey="car-rental-insurance-benefit-type"
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

export default CarRentalInsuranceBenefitTypePage;
