"use client";

import { useAddresses, useDeleteAddress } from "@/hooks/location/address";
import { useRouter } from "next/navigation";
import { createAddressHandlers } from "./features/handlers";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { createAddressActions } from "./features/actions";
import { DataTable } from "@/components/ui/data-table";
import { addressColumns } from "./components/columns";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const AddressPage = () => {
  const deleteMutation = useDeleteAddress();
  const { data, isPending, error } = useAddresses();
  const router = useRouter();

  const handlers = createAddressHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createAddressActions,
    deleteTitle: "Delete address",
    deleteDescription: "Are you sure you want to delete this address?",
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
        columns={addressColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default AddressPage;
