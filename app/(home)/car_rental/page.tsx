"use client"
import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { carRentalColumns } from "./components/columns";
import { useCarRentals } from "@/hooks/car-rental";

const CarrentalPage =  () => {
  const { data, isPending, error } = useCarRentals();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }
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
        <DataTable columns={carRentalColumns} data={data} />
      </div>
    </FormPage>
  );
};

export default CarrentalPage;
