"use client";

import { DataTable } from "@/components/ui/data-table";
import { placeColumns } from "./components/columns";
import { usePlaces, useDeletePlace } from "@/hooks/location/place";
import { useRouter } from "next/navigation";
import { createPlaceHandlers } from "./features/handlers";
import { createPlaceActions } from "./features/actions";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const PlacePage = () => {
  const deleteMutation = useDeletePlace();
  const { data, isPending, error } = usePlaces();
  const router = useRouter();

  const handlers = createPlaceHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createPlaceActions,
    deleteTitle: "Delete place",
    deleteDescription: "Are you sure you want to delete this place?",
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
        columns={placeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default PlacePage;
