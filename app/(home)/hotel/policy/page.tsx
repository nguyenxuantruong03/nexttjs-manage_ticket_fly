"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { policyColumns } from "./components/columns";
import {
  useDeleteHotelPolicy,
  useHotelPolicies,
} from "@/hooks/hotel/hotel-policy";
import { createPolicyHandlers } from "./features/handlers";
import { createPolicyActions } from "./features/actions";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const PolicyPage = () => {
  const deleteMutation = useDeleteHotelPolicy();
  const { data, isPending, error } = useHotelPolicies();
  const router = useRouter();

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
        columns={policyColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default PolicyPage;
