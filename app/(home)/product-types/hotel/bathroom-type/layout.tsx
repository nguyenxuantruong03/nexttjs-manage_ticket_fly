import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutBathroomType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="BathroomType"
        title="Manage BathroomType"
        link="/product-types/hotel/bathroom-type"
        action="Create"
        apiPath="bathroom-type"
        description="bathroom-type"
        draft={{
          entity: DraftEntity.HotelBathroomType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
