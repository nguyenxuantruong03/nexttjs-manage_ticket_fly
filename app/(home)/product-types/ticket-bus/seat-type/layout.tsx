import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutBusSeatType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Bus Seat Type"
        title="Manage Bus Seat Type"
        link="/bookings/bus/seat-type"
        action="Create"
        apiPath="bus-seat-type"
        description="Bus Seat Type"
        draft={{
          entity: DraftEntity.BusSeatType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}