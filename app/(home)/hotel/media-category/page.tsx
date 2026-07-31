"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { mediaCategoryColumns } from "./components/columns";
import {
  useDeleteHotelMediaCategory,
  useHotelMediaCategories,
} from "@/hooks/hotel/hotel-media-category";
import { createMediaCategoryHandlers } from "./features/handlers";
import { createMediaCategoryActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const MediaCategoryPage = () => {
  const deleteMutation = useDeleteHotelMediaCategory();
  const { data, isPending, error } = useHotelMediaCategories();
  const router = useRouter();

  const handlers = createMediaCategoryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createMediaCategoryActions,
    deleteTitle: "Delete media category",
    deleteDescription: "Are you sure you want to delete this mediacategory?",
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
        columns={mediaCategoryColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default MediaCategoryPage;
