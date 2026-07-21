"use client";
import { DataTable } from "@/components/ui/data-table";
import { providerBookingColumns } from "./components/columns";
import { useDeleteProviderBooking, useProviderBookings } from "@/hooks/provider-booking";
import { useRouter } from "next/navigation";
import { createProviderBookingHandlers } from "./features/handlers";
import { createProviderBookingActions } from "./features/actions";

const ProviderBooking = () => {
  const deleteMutation = useDeleteProviderBooking();
  const { data, isPending, error } = useProviderBookings();
  const router = useRouter();

  const handlers = createProviderBookingHandlers({
    router,
    deleteMutation,
  });

  const actions = createProviderBookingActions({
    onView: handlers.view,
    onEdit: handlers.edit,
    onDelete: handlers.delete,
  });
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }
  return <DataTable columns={providerBookingColumns(actions)} data={data} />;
};

export default ProviderBooking;
