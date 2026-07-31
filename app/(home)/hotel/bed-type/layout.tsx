import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutBedType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="BedType"
        title="Manage BedType"
        link="/hotel/bed-type"
        action="Create"
        apiPath="bed-type"
        description="bed-type"
        draft={{
          entity: DraftEntity.HotelBedType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
