import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutBookingType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Booking Type"
        title="Manage Booking Type"
        link="/commerce/booking-type"
        action="Create"
        apiPath="/booking-type"
        description="Booking Type"
        draft={{
          entity: DraftEntity.BookingType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
