import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutSearchTag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="SearchTag"
        title="Manage SearchTag"
        link="/search/tag"
        action="Create"
        apiPath="/search-tag"
        description="SearchTag"
        draft={{
          entity: DraftEntity.SearchTag,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
