import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutFacility({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Facility"
        title="Manage Facility"
        link="/features/facility/main"
        action="Create"
        apiPath="/facility"
        description="Facility"
        draft={{
          entity: DraftEntity.Facility,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}