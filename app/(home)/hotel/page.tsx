"use client"
import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { hotelColumns } from "./components/columns";
import { useHotels } from "@/hooks/hotel";

const hotelPage = () => {
  const { data, isPending, error } = useHotels();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }
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
        <DataTable columns={hotelColumns} data={data} />
      </div>
    </FormPage>
  );
};

export default hotelPage;
