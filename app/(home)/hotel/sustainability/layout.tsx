import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutSustainability({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Sustainability"
        title="Manage Sustainability"
        link="/hotel/sustainability"
        action="Create"
        apiPath="sustainability"
        description="sustainability"
        draft={{
          entity: DraftEntity.HotelSustainability,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
