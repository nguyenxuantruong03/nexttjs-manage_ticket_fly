"use client";

import { DataTable } from "@/components/ui/data-table";

import { bookingItemTypeColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createBookingItemTypeActions } from "./features/actions";

import { createBookingItemTypeHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteBookingItemType,
  useBookingItemTypes,
} from "@/hooks/commerce/booking-item-type";

const BookingItemType = () => {
  const router = useRouter();

  const deleteMutation = useDeleteBookingItemType();

  const { data, isPending, error } = useBookingItemTypes();

  const handlers = createBookingItemTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createBookingItemTypeActions,

    deleteTitle: "Delete booking item type",

    deleteDescription:
      "Are you sure you want to delete this booking item type?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={bookingItemTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default BookingItemType;
