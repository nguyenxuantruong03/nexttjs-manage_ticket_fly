import FormPage from "@/components/form/form";

export default function LayoutBus({ children }: { children: React.ReactNode }) {
  return (
    <FormPage
      label="TicketBusPage"
      title="Manage Car Rental"
      link="/bus/create"
      action="Create"
      apiPath="bus"
      description="TicketBusPage"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
