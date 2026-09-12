"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { bookingTypeColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createBookingTypeActions } from "./features/actions";
import { createBookingTypeHandlers } from "./features/handlers";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useDeleteBookingType,
  useBookingTypes,
} from "@/hooks/commerce/booking-type";

const BookingType = () => {
  const router = useRouter();

  const deleteMutation = useDeleteBookingType();
  const { data, isPending, error } = useBookingTypes();

  const handlers = createBookingTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createBookingTypeActions,
    deleteTitle: "Delete booking type",
    deleteDescription: "Are you sure you want to delete this booking type?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={bookingTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default BookingType;
