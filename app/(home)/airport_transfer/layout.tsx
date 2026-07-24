import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutAirportTransfer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="airportTransferpage"
        title="Manage Provider Booking"
        link="/airport_transfer"
        action="Create"
        apiPath="airport-transfer"
        description="airportPage"
        draft={{
          entity: DraftEntity.AirportTransfer,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
