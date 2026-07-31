"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { extraTypeColumns } from "./components/columns";
import {
  useDeleteHotelExtraType,
  useHotelExtraTypes,
} from "@/hooks/hotel/hotel-extra-type";
import { createExtraTypeHandlers } from "./features/handlers";
import { createExtraTypeActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const ExtraTypePage = () => {
  const deleteMutation = useDeleteHotelExtraType();
  const { data, isPending, error } = useHotelExtraTypes();
  const router = useRouter();

  const handlers = createExtraTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createExtraTypeActions,
    deleteTitle: "Delete extratype",
    deleteDescription: "Are you sure you want to delete this extratype?",
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
        columns={extraTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default ExtraTypePage;
