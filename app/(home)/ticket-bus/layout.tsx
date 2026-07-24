import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutBus({ children }: { children: React.ReactNode }) {
  return (
    <FormPageProvider>
      <FormPage
        label="TicketBusPage"
        title="Manage Car Rental"
        link="/ticket-bus"
        action="Create"
        apiPath="bus"
        description="TicketBusPage"
        draft={{
          entity: DraftEntity.Ticketbus,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
