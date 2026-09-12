"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { mediaAssetColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createMediaAssetActions } from "./features/actions";

import { createMediaAssetHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteMediaAsset,
  useMediaAssets,
} from "@/hooks/catalog/media-asset";

const MediaAsset = () => {
  const router = useRouter();

  const deleteMutation = useDeleteMediaAsset();

  const { data, isPending, error } = useMediaAssets();

  const handlers = createMediaAssetHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createMediaAssetActions,

    deleteTitle: "Delete media asset",

    deleteDescription: "Are you sure you want to delete this media asset?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={mediaAssetColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default MediaAsset;
