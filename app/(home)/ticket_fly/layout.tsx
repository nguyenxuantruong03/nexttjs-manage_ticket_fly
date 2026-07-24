import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutTicketFly({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="TicletFly"
        title="Manage Ticket Fly"
        link="/ticket-fly"
        action="Create"
        apiPath="ticket-fly"
        description="TicletFly"
        draft={{
          entity: DraftEntity.Ticketflight,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
