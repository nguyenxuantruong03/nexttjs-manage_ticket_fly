"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { placeTypeColumns } from "./components/columns";

import {
  usePlaceTypes,
  useDeletePlaceType,
} from "@/hooks/location/place/place-type";

import { useRouter } from "next/navigation";

import { createPlaceTypeHandlers } from "./features/handlers";

import { createPlaceTypeActions } from "./features/actions";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const PlaceTypePage = () => {
  const deleteMutation = useDeletePlaceType();

  const { data, isPending, error } = usePlaceTypes();

  const router = useRouter();

  const handlers = createPlaceTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createPlaceTypeActions,
    deleteTitle: "Delete place type",
    deleteDescription: "Are you sure you want to delete this place type?",
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
        columns={placeTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default PlaceTypePage;
