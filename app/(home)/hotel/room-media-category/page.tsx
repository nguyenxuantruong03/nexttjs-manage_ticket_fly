"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { roomMediaCategoryColumns } from "./components/columns";
import {
  useDeleteHotelRoomMediaCategory,
  useHotelRoomMediaCategories,
} from "@/hooks/hotel/hotel-room-media-category";
import { createRoomMediaCategoryHandlers } from "./features/handlers";
import { createRoomMediaCategoryActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const RoomMediaCategoryPage = () => {
  const deleteMutation = useDeleteHotelRoomMediaCategory();
  const { data, isPending, error } = useHotelRoomMediaCategories();
  const router = useRouter();

  const handlers = createRoomMediaCategoryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createRoomMediaCategoryActions,
    deleteTitle: "Delete roomMediaCategory",
    deleteDescription: "Are you sure you want to delete this roomMediaCategory?",
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
        columns={roomMediaCategoryColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default RoomMediaCategoryPage;
