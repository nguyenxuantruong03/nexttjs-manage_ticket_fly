import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutFacilityCategory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Facility Category"
        title="Manage Facility Category"
        link="/hotel/facility-category"
        action="Create"
        apiPath="facility-category"
        description="facility-category"
        draft={{
          entity: DraftEntity.HotelFacilityCategory,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
