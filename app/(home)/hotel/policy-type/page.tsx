"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { policyTypeColumns } from "./components/columns";
import {
  useDeleteHotelPolicyType,
  useHotelPolicyTypes,
} from "@/hooks/hotel/hotel-policy-type";
import { createPolicyTypeHandlers } from "./features/handlers";
import { createPolicyTypeActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const PolicyTypePage = () => {
  const deleteMutation = useDeleteHotelPolicyType();
  const { data, isPending, error } = useHotelPolicyTypes();
  const router = useRouter();

  const handlers = createPolicyTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createPolicyTypeActions,
    deleteTitle: "Delete policyType",
    deleteDescription: "Are you sure you want to delete this policyType?",
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
        columns={policyTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default PolicyTypePage;
