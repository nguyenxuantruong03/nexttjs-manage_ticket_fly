"use client";

import { DataTable } from "@/components/ui/data-table";
import { facilityCategoryColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createFacilityCategoryActions } from "./features/actions";
import { createFacilityCategoryHandlers } from "./features/handlers";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useDeleteFacilityCategory,
  useFacilityCategories,
} from "@/hooks/features/facility-category";

const FacilityCategory = () => {
  const router = useRouter();

  const deleteMutation = useDeleteFacilityCategory();
  const { data, isPending, error } = useFacilityCategories();

  const handlers = createFacilityCategoryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFacilityCategoryActions,
    deleteTitle: "Delete facility category",
    deleteDescription:
      "Are you sure you want to delete this facility category?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

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

export default FacilityCategory;