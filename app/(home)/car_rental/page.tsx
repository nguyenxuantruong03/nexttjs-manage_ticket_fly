import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { getCarRental } from "@/lib/car-rental";
import { carRentalColumns } from "./components/columns";

const CarrentalPage = async () => {
  const carRentalData = await getCarRental();
  return (
    <FormPage
      label="CarrentalPage"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider-booking"
      description="CarrentalPage"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable columns={carRentalColumns} data={carRentalData} />
      </div>
    </FormPage>
  );
};

export default CarrentalPage;
