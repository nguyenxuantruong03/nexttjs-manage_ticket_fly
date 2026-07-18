import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { providerBookingColumns } from "../components/columns";
import { getProviderBookings } from "@/lib/provider-bookings";
import { typeServiceBooings } from "@/types/bookings/provider-bookings";

const HotelProviderBooking = async () => {
  const hotelProviderBookings = await getProviderBookings(
    typeServiceBooings.HOTEL,
  );
  return (
    <FormPage
      label="HotelProviderBooking"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider-booking"
      description="HotelProviderBooking"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable
          columns={providerBookingColumns}
          data={hotelProviderBookings}
        />
      </div>
    </FormPage>
  );
};

export default HotelProviderBooking;
