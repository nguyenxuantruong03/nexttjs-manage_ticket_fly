"use client";

import { DataTable } from "@/components/ui/data-table";

import { promotionRuleColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createPromotionRuleActions } from "./features/actions";

import { createPromotionRuleHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeletePromotionRule,
  usePromotionRules,
} from "@/hooks/commerce/promotion-rule";

const PromotionRule = () => {
  const router = useRouter();

  const deleteMutation = useDeletePromotionRule();

  const { data, isPending, error } = usePromotionRules();

  const handlers = createPromotionRuleHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createPromotionRuleActions,
    deleteTitle: "Delete promotion rule",
    deleteDescription:
      "Are you sure you want to delete this promotion rule?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={promotionRuleColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default PromotionRule;