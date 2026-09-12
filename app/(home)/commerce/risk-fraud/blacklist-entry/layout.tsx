import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutBlacklistEntry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Blacklist Entry"
        title="Manage Blacklist Entry"
        link="/commerce/risk-fraud/blacklist-entry"
        action="Create"
        apiPath="/blacklist-entry"
        description="Blacklist Entry"
        draft={{
          entity: DraftEntity.BlacklistEntry,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}