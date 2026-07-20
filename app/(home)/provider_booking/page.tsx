"use client"
import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { providerBookingColumns } from "./components/columns";
import { useProviderBookings } from "@/hooks/provider-booking";

const ProviderBooking = () => {
  const { data, isPending, error } = useProviderBookings();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }
  return (
    <FormPage
      label="ProviderBooking"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider_booking"
      description="ProviderBooking"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable columns={providerBookingColumns} data={data} />
      </div>
    </FormPage>
  );
};

export default ProviderBooking;
