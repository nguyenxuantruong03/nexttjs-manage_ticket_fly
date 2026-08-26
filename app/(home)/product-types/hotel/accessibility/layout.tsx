import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutAccessibility({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Accessibility"
        title="Manage Accessibility"
        link="/product-types/hotel/accessibility"
        action="Create"
        apiPath="accessibility"
        description="accessibility"
        draft={{
          entity: DraftEntity.HotelAccessibility,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
