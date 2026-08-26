import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

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
        link="/features/facility-category"
        action="Create"
        apiPath="/facility-category"
        description="Facility Category"
        draft={{
          entity: DraftEntity.FacilityCategory,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}