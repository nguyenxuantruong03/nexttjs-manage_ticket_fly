import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutPolicyType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="PolicyType"
        title="Manage PolicyType"
        link="/hotel/policy-type"
        action="Create"
        apiPath="policy-type"
        description="policy-type"
        draft={{
          entity: DraftEntity.HotelPolicyType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
