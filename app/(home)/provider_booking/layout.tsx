import FormPage from "@/components/form/form";

export default function LayoutProviderBooking({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPage
      label="ProviderBooking"
      title="Manage Provider Booking"
      link="/provider_booking/create"
      action="Create"
      apiPath="provider_booking"
      description="ProviderBooking"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
