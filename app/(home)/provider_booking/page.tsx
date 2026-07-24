"use client";
import { DataTable } from "@/components/ui/data-table";
import { providerBookingColumns } from "./components/columns";
import {
  useDeleteProviderBooking,
  useProviderBookings,
} from "@/hooks/provider-booking";
import { useRouter } from "next/navigation";
import { createProviderBookingHandlers } from "./features/handlers";
import { createProviderBookingActions } from "./features/actions";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

const ProviderBooking = () => {
  const deleteMutation = useDeleteProviderBooking();
  const { data, isPending, error } = useProviderBookings();
  const router = useRouter();

  const handlers = createProviderBookingHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createProviderBookingActions,
    deleteTitle: "Delete provider booking",
    deleteDescription: "Are you sure you want to delete this provider booking?",
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }
  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={providerBookingColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default ProviderBooking;
