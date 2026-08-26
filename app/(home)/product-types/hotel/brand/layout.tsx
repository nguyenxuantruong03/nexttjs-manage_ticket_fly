import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutHotelBrand({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Brand"
        title="Manage Brand"
        link="/product-types/hotel/brand"
        action="Create"
        apiPath="brand"
        description="brand"
        draft={{
          entity: DraftEntity.HotelBrand,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
