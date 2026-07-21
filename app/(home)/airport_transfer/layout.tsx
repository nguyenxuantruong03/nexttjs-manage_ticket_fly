import FormPage from "@/components/form/form";

export default function LayoutAirportTransfer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPage
      label="airportTransferpage"
      title="Manage Provider Booking"
      link="/airport_transfer/create"
      action="Create"
      apiPath="airport-transfer"
      description="airportPage"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
