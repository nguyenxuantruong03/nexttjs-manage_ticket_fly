import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutBookingItemType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Booking Item Type"
        title="Manage Booking Item Type"
        link="/commerce/booking-item-type"
        action="Create"
        apiPath="/booking-item-type"
        description="Booking Item Type"
        draft={{
          entity: DraftEntity.BookingItemType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}