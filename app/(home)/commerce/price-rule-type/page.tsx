"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { priceRuleTypeColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createPriceRuleTypeActions } from "./features/actions";

import { createPriceRuleTypeHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeletePriceRuleType,
  usePriceRuleTypes,
} from "@/hooks/commerce/price-rule-type";

const PriceRuleType = () => {
  const router = useRouter();

  const deleteMutation = useDeletePriceRuleType();

  const { data, isPending, error } = usePriceRuleTypes();

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
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default PriceRuleType;
