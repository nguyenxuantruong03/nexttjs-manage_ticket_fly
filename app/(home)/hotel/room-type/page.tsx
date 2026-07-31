"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { roomTypeColumns } from "./components/columns";
import {
  useDeleteHotelRoomType,
  useHotelRoomTypes,
} from "@/hooks/hotel/hotel-room-type";
import { createRoomTypeHandlers } from "./features/handlers";
import { createRoomTypeActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const RoomTypePage = () => {
  const deleteMutation = useDeleteHotelRoomType();
  const { data, isPending, error } = useHotelRoomTypes();
  const router = useRouter();

  const handlers = createRoomTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createRoomTypeActions,
    deleteTitle: "Delete roomType",
    deleteDescription: "Are you sure you want to delete this roomType?",
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
        columns={roomTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default RoomTypePage;
