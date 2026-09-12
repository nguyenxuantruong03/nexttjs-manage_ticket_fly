"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { facilityColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createFacilityActions } from "./features/actions";
import { createFacilityHandlers } from "./features/handlers";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useDeleteFacility, useFacilities } from "@/hooks/features/facility";

const Facility = () => {
  const router = useRouter();

  const deleteMutation = useDeleteFacility();
  const { data, isPending, error } = useFacilities();

  const handlers = createFacilityHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFacilityActions,
    deleteTitle: "Delete facility",
    deleteDescription: "Are you sure you want to delete this facility?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={facilityColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default Facility;
