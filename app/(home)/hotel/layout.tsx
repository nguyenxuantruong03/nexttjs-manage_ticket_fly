import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutHotel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="hotelPage"
        title="Manage Provider Booking"
        link="/hotel"
        action="Create"
        apiPath="hotel-create"
        description="hotelPage"
        draft={{
          entity: DraftEntity.Hotel,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
