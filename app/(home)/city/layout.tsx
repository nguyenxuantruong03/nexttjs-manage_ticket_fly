import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutCity({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="City"
        title="Manage City"
        link="/city"
        action="Create"
        apiPath="city"
        description="city"
        draft={{
          entity: DraftEntity.City,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
