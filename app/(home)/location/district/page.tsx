"use client";

import { useDistricts, useDeleteDistrict } from "@/hooks/location/district";
import { useRouter } from "next/navigation";
import { createDistrictHandlers } from "./features/handlers";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { createDistrictActions } from "./features/actions";
import { DataTable } from "@/components/ui/data-table/data-table";
import { districtColumns } from "./components/columns";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const DistrictPage = () => {
  const deleteMutation = useDeleteDistrict();
  const { data, isPending, error } = useDistricts();
  const router = useRouter();

  const handlers = createDistrictHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createDistrictActions,
    deleteTitle: "Delete District",
    deleteDescription: "Are you sure you want to delete this District?",
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
        columns={districtColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default DistrictPage;
