import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutRoomType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="RoomType"
        title="Manage RoomType"
        link="/hotel/room-type"
        action="Create"
        apiPath="room-type"
        description="room-type"
        draft={{
          entity: DraftEntity.HotelRoomType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
