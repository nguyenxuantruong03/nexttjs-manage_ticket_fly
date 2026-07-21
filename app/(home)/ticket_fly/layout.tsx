import FormPage from "@/components/form/form";

export default function LayoutTicketFly({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPage
      label="TicletFly"
      title="Manage Ticket Fly"
      link="/ticket-fly/create"
      action="Create"
      apiPath="ticket-fly"
      description="TicletFly"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
