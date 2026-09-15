"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { PaginationState } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import {
  useDeletePriceRuleType,
  usePriceRuleTypes,
} from "@/hooks/commerce/price-rule-type";

import { priceRuleTypeColumns } from "./components/columns";
import { createPriceRuleTypeActions } from "./features/actions";
import { createPriceRuleTypeHandlers } from "./features/handlers";

const PriceRuleType = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const deleteMutation = useDeletePriceRuleType();

  const { data, isPending, isFetching, error } = usePriceRuleTypes(
    pagination.pageIndex + 1,
    pagination.pageSize,
  );

  const handlers = createPriceRuleTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createPriceRuleTypeActions,
    deleteTitle: "Delete price rule type",
    deleteDescription: "Are you sure you want to delete this price rule type?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={priceRuleTypeColumns(actions)}
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
        persistKey="price-rule-type"
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

export default PriceRuleType;
