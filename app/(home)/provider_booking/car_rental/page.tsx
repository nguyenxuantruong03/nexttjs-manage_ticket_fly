import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { providerBookingColumns } from "../components/columns";
import { getProviderBookings } from "@/lib/provider-bookings";
import { typeServiceBooings } from "@/types/bookings/provider-bookings";

const CarrentalProviderBooking = async () => {
  const carrentalProviderBookings = await getProviderBookings(typeServiceBooings.CAR_RENTAL);
  return (
    <FormPage
      label="CarrentalProviderBooking"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider-booking"
      description="CarrentalProviderBooking"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable
          columns={providerBookingColumns}
          data={carrentalProviderBookings}
        />
      </div>
    </FormPage>
  );
};

export default CarrentalProviderBooking;
