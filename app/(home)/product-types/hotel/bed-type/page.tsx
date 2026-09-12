"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table/data-table";
import {
  useDeleteHotelBedType,
  useHotelBedTypes,
} from "@/hooks/product-types/hotel/hotel-bed-type";
import { createBedTypeHandlers } from "./features/handlers";
import { createBedTypeActions } from "./features/actions";
import { bedTypeColumns } from "./components/columns";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const BedTypePage = () => {
  const deleteMutation = useDeleteHotelBedType();
  const { data, isPending, error } = useHotelBedTypes();
  const router = useRouter();

  const handlers = createBedTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createBedTypeActions,
    deleteTitle: "Delete bedtype",
    deleteDescription: "Are you sure you want to delete this bedtype?",
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
        columns={bedTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default BedTypePage;
