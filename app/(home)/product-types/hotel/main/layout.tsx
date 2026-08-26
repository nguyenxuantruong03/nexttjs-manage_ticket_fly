import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";

export default function LayoutHotel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <FormPage
        label="HotelPage"
        title="Manage Hotel Room"
        link="/product-types/hotel/main"
        action="Create"
        apiPath="hotel-create"
        description="hotelPage"
        draft={{
          entity: DraftEntity.Hotel,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
  );
}
