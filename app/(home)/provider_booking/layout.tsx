import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutProviderBooking({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="ProviderBooking"
        title="Manage Provider Booking"
        link="/provider_booking"
        action="Create"
        apiPath="provider_booking"
        description="ProviderBooking"
        draft={{
          entity: DraftEntity.ProviderBooking,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
