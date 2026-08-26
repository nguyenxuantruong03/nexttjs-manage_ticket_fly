import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutRoomView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="RoomView"
        title="Manage RoomView"
        link="/product-types/hotel/room-view"
        action="Create"
        apiPath="room-view"
        description="room-view"
        draft={{
          entity: DraftEntity.HotelRoomView,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
