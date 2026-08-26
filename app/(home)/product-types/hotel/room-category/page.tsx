"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { roomCategoryColumns } from "./components/columns";
import {
  useDeleteHotelRoomCategory,
  useHotelRoomCategories,
} from "@/hooks/product-types/hotel/hotel-room-category";
import { createRoomCategoryHandlers } from "./features/handlers";
import { createRoomCategoryActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const RoomCategoryPage = () => {
  const deleteMutation = useDeleteHotelRoomCategory();
  const { data, isPending, error } = useHotelRoomCategories();
  const router = useRouter();

  const handlers = createRoomCategoryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createRoomCategoryActions,
    deleteTitle: "Delete roomCategory",
    deleteDescription: "Are you sure you want to delete this roomCategory?",
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
        columns={roomCategoryColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default RoomCategoryPage;
