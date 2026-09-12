import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutMediaCategory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Media Category"
        title="Manage Media Category"
        link="/catalog/media-category"
        action="Create"
        apiPath="/media-category"
        description="Media Category"
        draft={{
          entity: DraftEntity.MediaCategory,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
