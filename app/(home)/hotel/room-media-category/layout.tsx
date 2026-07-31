import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutRoomMedialCategory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="RoomMedialCategory"
        title="Manage RoomMedialCategory"
        link="/hotel/room-media-category"
        action="Create"
        apiPath="room-media-category"
        description="room-media-category"
        draft={{
          entity: DraftEntity.HotelRoomMediaCategory,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
