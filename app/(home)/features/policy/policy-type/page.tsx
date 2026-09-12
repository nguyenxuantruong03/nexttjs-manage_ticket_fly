"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { policyTypeColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createPolicyTypeActions } from "./features/actions";

import { createPolicyTypeHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeletePolicyType,
  usePolicyTypes,
} from "@/hooks/features/policy-type";

const PolicyType = () => {
  const router = useRouter();

  const deleteMutation = useDeletePolicyType();

  const { data, isPending, error } = usePolicyTypes();

  const handlers = createPolicyTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createPolicyTypeActions,
    deleteTitle: "Delete policy type",
    deleteDescription: "Are you sure you want to delete this policy type?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={policyTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default PolicyType;
