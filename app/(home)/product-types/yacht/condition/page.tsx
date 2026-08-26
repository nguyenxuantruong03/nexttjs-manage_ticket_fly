"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";

import { createYachtConditionHandlers } from "./features/handlers";
import { createYachtConditionActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useYachtConditions,
  useDeleteYachtCondition,
} from "@/hooks/product-types/yacht/condition";
import { yachtConditionColumns } from "./components/columns";

const YachtConditionPage = () => {
  const deleteMutation = useDeleteYachtCondition();
  const { data, isPending, error } = useYachtConditions();
  const router = useRouter();

  const handlers = createYachtConditionHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createYachtConditionActions,
    deleteTitle: "Delete yacht condition",
    deleteDescription:
      "Are you sure you want to delete this yacht condition?",
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
        columns={yachtConditionColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default YachtConditionPage;