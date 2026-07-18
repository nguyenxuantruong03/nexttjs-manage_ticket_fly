import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { hotelColumns } from "./components/columns";
import { getHotel } from "@/lib/hotel";

const hotelPage = async () => {
  const hotelData = await getHotel();
  return (
    <FormPage
      label="hotelPage"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider-booking"
      description="hotelPage"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable columns={hotelColumns} data={hotelData} />
      </div>
    </FormPage>
  );
};

export default hotelPage;
