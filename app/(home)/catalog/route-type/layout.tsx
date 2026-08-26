import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutRouteType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Route Type"
        title="Manage Route Type"
        link="/catalog/route-type"
        action="Create"
        apiPath="/route-type"
        description="Route Type"
        draft={{
          entity: DraftEntity.RouteType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}