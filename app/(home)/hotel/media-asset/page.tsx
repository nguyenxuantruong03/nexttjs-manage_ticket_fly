"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { mediaAssetColumns } from "./components/columns";
import {
  useDeleteHotelMediaAsset,
  useHotelMediaAssets
} from "@/hooks/hotel/hotel-media-asset";
import { createMediaAssetHandlers } from "./features/handlers";
import { createMediaAssetActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const MediaAssetPage = () => {
  const deleteMutation = useDeleteHotelMediaAsset();
  const { data, isPending, error } = useHotelMediaAssets();
  const router = useRouter();

  const handlers = createMediaAssetHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createMediaAssetActions,
    deleteTitle: "Delete media asset",
    deleteDescription: "Are you sure you want to delete this mediaasset?",
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
        columns={mediaAssetColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default MediaAssetPage;
