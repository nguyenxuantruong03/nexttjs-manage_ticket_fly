"use client"
import FormPage from "@/components/form/form";
import { airportTransferColumns } from "./components/columns";
import { DataTable } from "@/components/ui/data-table";
import { useAirportTransfers } from "@/hooks/airport-transfer";

const AirportTransferPage = () => {
  const { data=[], isPending, error } = useAirportTransfers();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }
  return (
    <FormPage
      label="airportTransferpage"
      title="Manage Provider Booking"
      link="/airport_transfer/create"
      action="Create"
      apiPath="airport-transfer"
      description="airportPage"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable columns={airportTransferColumns} data={data} />
      </div>
    </FormPage>
  );
};

export default AirportTransferPage;
