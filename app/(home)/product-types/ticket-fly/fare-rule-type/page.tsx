"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table/data-table";

import { flyFareRuleTypeColumns } from "./components/columns";

import { createFlyFareRuleTypeActions } from "./features/actions";

import {
  useDeleteFlyFareRuleType,
  useFlyFareRuleTypes,
} from "@/hooks/product-types/ticket-fly/fare-rule-type";

import { createFlyFareRuleTypeHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const FlyFareRuleTypePage = () => {
  const deleteMutation = useDeleteFlyFareRuleType();

  const { data, isPending, error } = useFlyFareRuleTypes();

  const router = useRouter();

  const handlers = createFlyFareRuleTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createFlyFareRuleTypeActions,

    deleteTitle: "Delete fly fare rule type",

    deleteDescription:
      "Are you sure you want to delete this fly fare rule type?",
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
        columns={flyFareRuleTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyFareRuleTypePage;
