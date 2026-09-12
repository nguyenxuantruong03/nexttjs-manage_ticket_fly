import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutAuditLog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="AuditLog"
        title="Manage Audit Log"
        apiPath="audit-logs"
        description="Audit Log"
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
