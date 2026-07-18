import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { providerBookingColumns } from "../components/columns";
import { getProviderBookings } from "@/lib/provider-bookings";
import { typeServiceBooings } from "@/types/bookings/provider-bookings";

const TicketBusProviderBooking = async () => {
  const ticketBusProviderBookings = await getProviderBookings(
    typeServiceBooings.TICKETBUS,
  );
  return (
    <FormPage
      label="TicketBusProviderBooking"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider-booking"
      description="TicketBusProviderBooking"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable
          columns={providerBookingColumns}
          data={ticketBusProviderBookings}
        />
      </div>
    </FormPage>
  );
};

export default TicketBusProviderBooking;
