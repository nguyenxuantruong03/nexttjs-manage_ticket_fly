import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { providerBookingColumns } from "../components/columns";
import { getProviderBookings } from "@/lib/provider-bookings";
import { typeServiceBooings } from "@/types/bookings/provider-bookings";

const TicketFlyProviderBooking = async () => {
  const ticketFlyProviderBookings = await getProviderBookings(
    typeServiceBooings.TICKETFLY,
  );
  return (
    <FormPage
      label="TicketFlyProviderBooking"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider-booking"
      description="Manage Provider Booking"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable
          columns={providerBookingColumns}
          data={ticketFlyProviderBookings}
        />
      </div>
    </FormPage>
  );
};

export default TicketFlyProviderBooking;
