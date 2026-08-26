import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutDiningServiceType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="DiningServiceType"
        title="Manage DiningServiceType"
        link="/product-types/hotel/dining-service-type"
        action="Create"
        apiPath="dining-service-type"
        description="dining-service-type"
        draft={{
          entity: DraftEntity.HotelDiningServiceType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
