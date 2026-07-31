"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { typeColumns } from "./components/columns";
import {
  useDeleteHotelType,
  useHotelTypes,
} from "@/hooks/hotel/hotel-type";
import { createTypeHandlers } from "./features/handlers";
import { createTypeActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const TypePage = () => {
  const deleteMutation = useDeleteHotelType();
  const { data, isPending, error } = useHotelTypes();
  const router = useRouter();

  const handlers = createTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createTypeActions,
    deleteTitle: "Delete type",
    deleteDescription: "Are you sure you want to delete this type?",
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
        columns={typeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default TypePage;
