"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { taxRuleColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createTaxRuleActions } from "./features/actions";

import { createTaxRuleHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteTaxRule,
  useTaxRules,
} from "@/hooks/commerce/compliance-legal/tax-rule";

const TaxRule = () => {
  const router = useRouter();

  const deleteMutation = useDeleteTaxRule();

  const { data, isPending, error } = useTaxRules();

  const handlers = createTaxRuleHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createTaxRuleActions,

    deleteTitle: "Delete tax rule",

    deleteDescription:
      "Are you sure you want to delete this tax rule?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={taxRuleColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default TaxRule;