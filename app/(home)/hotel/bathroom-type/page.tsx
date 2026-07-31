"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { bathroomTypeColumns } from "./components/columns";
import {
  useHotelBathroomTypes,
  useDeleteHotelBathroomType,
} from "@/hooks/hotel/hotel-bathroom-type";
import { createBathRoomTypeHandlers } from "./features/handlers";
import { createBathroomTypeActions } from "./features/actions";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const BathroomTypePage = () => {
  const deleteMutation = useDeleteHotelBathroomType();
  const { data, isPending, error } = useHotelBathroomTypes();
  const router = useRouter();

  const handlers = createBathRoomTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createBathroomTypeActions,
    deleteTitle: "Delete bathroom type",
    deleteDescription: "Are you sure you want to delete this bathroom type?",
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
        columns={bathroomTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default BathroomTypePage;
