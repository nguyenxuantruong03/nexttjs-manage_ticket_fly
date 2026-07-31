import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutTimezone({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Timezone"
        title="Manage Timezone"
        link="/location/timezone"
        action="Create"
        apiPath="location/timezone"
        description="location/timezone"
        draft={{
          entity: DraftEntity.Timezone,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
