"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { mediaCategoryColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createMediaCategoryActions } from "./features/actions";

import { createMediaCategoryHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteMediaCategory,
  useMediaCategories,
} from "@/hooks/catalog/media-category";

const MediaCategory = () => {
  const router = useRouter();

  const deleteMutation = useDeleteMediaCategory();

  const { data, isPending, error } = useMediaCategories();

  const handlers = createMediaCategoryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createMediaCategoryActions,
    deleteTitle: "Delete media category",
    deleteDescription: "Are you sure you want to delete this media category?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

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

export default MediaCategory;
