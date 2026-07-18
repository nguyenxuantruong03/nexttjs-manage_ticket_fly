import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { providerBookingColumns } from "../components/columns";
import { getProviderBookings } from "@/lib/provider-bookings";
import { typeServiceBooings } from '@/types/bookings/provider-bookings';

const AirportTransferProviderBooking = async () => {
  const airportTransferProviderBookings = await getProviderBookings(
    typeServiceBooings.AIRPORTTRANSFER,
  );
  return (
    <FormPage
      label="AirportTransferProviderBooking"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider-booking"
      description="AirportTransferProviderBooking"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable
          columns={providerBookingColumns}
          data={airportTransferProviderBookings}
        />
      </div>
    </FormPage>
  );
};

export default AirportTransferProviderBooking;
