"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { roomViewColumns } from "./components/columns";
import {
  useDeleteHotelRoomView,
  useHotelRoomViews,
} from "@/hooks/hotel/hotel-room-view";
import { createRoomViewHandlers } from "./features/handlers";
import { createRoomViewActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const RoomViewPage = () => {
  const deleteMutation = useDeleteHotelRoomView();
  const { data, isPending, error } = useHotelRoomViews();
  const router = useRouter();

  const handlers = createRoomViewHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createRoomViewActions,
    deleteTitle: "Delete roomView",
    deleteDescription: "Are you sure you want to delete this roomView?",
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
        columns={roomViewColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default RoomViewPage;
