import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutWhitelistEntry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Whitelist Entry"
        title="Manage Whitelist Entry"
        link="/commerce/risk-fraud/whitelist-entry"
        action="Create"
        apiPath="/whitelist-entry"
        description="Whitelist Entry"
        draft={{
          entity: DraftEntity.WhitelistEntry,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
