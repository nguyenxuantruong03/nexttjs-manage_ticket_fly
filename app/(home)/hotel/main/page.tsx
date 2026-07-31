"use client";
import { DataTable } from "@/components/ui/data-table";
import { useDeleteHotel, useHotels } from "@/hooks/hotel";
import { useRouter } from "next/navigation";
import { createHotelHandlers } from "./features/handlers";
import { createHotelActions } from "./features/actions";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { hotelColumns } from "./components/columns";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const HotelPage = () => {
  const deleteMutation = useDeleteHotel();
  const { data, isPending, error } = useHotels();
  const router = useRouter();

  const handlers = createHotelHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createHotelActions,
    deleteTitle: "Delete hotel",
    deleteDescription: "Are you sure you want to delete this hotel?",
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
        columns={hotelColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
      ;
    </>
  );
};

export default HotelPage;
