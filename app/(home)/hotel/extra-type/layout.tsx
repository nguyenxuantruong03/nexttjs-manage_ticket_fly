import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutExtraType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="ExtraType"
        title="Manage ExtraType"
        link="/hotel/extra-type"
        action="Create"
        apiPath="extra-type"
        description="extra-type"
        draft={{
          entity: DraftEntity.HotelExtraType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
