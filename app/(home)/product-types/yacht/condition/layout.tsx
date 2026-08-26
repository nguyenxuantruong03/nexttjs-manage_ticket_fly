import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutYachtCondition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Yacht Condition"
        title="Manage Yacht Condition"
        link="/product-types/yacht/condition"
        action="Create"
        apiPath="yacht-condition"
        description="Yacht Condition"
        draft={{
          entity: DraftEntity.YachtCondition,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}