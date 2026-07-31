"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { facilityCategoryColumns } from "./components/columns";
import {
  useDeleteHotelFacilityCategory,
  useHotelFacilityCategories,
} from "@/hooks/hotel/hotel-facility-category";
import { createFacilityCategoryHandlers } from "./features/handlers";
import { createFacilityCategoryActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FacilityCategoryPage = () => {
  const deleteMutation = useDeleteHotelFacilityCategory();
  const { data, isPending, error } = useHotelFacilityCategories();
  const router = useRouter();

  const handlers = createFacilityCategoryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFacilityCategoryActions,
    deleteTitle: "Delete facilityCategory",
    deleteDescription: "Are you sure you want to delete this facilityCategory?",
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
        columns={facilityCategoryColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FacilityCategoryPage;
