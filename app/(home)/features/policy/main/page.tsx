"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { policyColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createPolicyActions } from "./features/actions";

import { createPolicyHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useDeletePolicy, usePolicies } from "@/hooks/features/policy";

const Policy = () => {
  const router = useRouter();

  const deleteMutation = useDeletePolicy();

  const { data, isPending, error } = usePolicies();

  const handlers = createPolicyHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createPolicyActions,
    deleteTitle: "Delete policy",
    deleteDescription: "Are you sure you want to delete this policy?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={policyColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default Policy;
