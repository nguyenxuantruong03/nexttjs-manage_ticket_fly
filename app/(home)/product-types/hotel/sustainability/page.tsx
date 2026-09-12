"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table/data-table";
import { sustainabilityColumns } from "./components/columns";
import {
  useDeleteHotelSustainability,
  useHotelSustainabilities,
} from "@/hooks/product-types/hotel/hotel-sustainability";
import { createSustainabilityHandlers } from "./features/handlers";
import { createSustainabilityActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const SustainabilityPage = () => {
  const deleteMutation = useDeleteHotelSustainability();
  const { data, isPending, error } = useHotelSustainabilities();
  const router = useRouter();

  const handlers = createSustainabilityHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createSustainabilityActions,
    deleteTitle: "Delete sustainability",
    deleteDescription: "Are you sure you want to delete this sustainability?",
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
        columns={sustainabilityColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default SustainabilityPage;
