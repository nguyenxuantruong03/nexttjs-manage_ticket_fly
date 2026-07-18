import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { providerBookingColumns } from "../components/columns";
import { getProviderBookings } from "@/lib/provider-bookings";
import { typeServiceBooings } from "@/types/bookings/provider-bookings";

const YachtProviderBooking = async () => {
  const yachtProviderBookings = await getProviderBookings(
    typeServiceBooings.YACHT,
  );
  return (
    <FormPage
      label="YachtProviderBooking"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider-booking"
      description="YachtProviderBooking"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable
          columns={providerBookingColumns}
          data={yachtProviderBookings}
        />
      </div>
    </FormPage>
  );
};

export default YachtProviderBooking;
