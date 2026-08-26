import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutRoomCategory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="RoomCategory"
        title="Manage RoomCategory"
        link="/product-types/hotel/room-category"
        action="Create"
        apiPath="room-category"
        description="room-category"
        draft={{
          entity: DraftEntity.HotelRoomCategory,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
