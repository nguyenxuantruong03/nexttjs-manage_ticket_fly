import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutMediaAsset({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Media Asset"
        title="Manage Media Asset"
        link="/catalog/media-asset"
        action="Create"
        apiPath="media-asset"
        description="Media Asset"
        draft={{
          entity: DraftEntity.MediaAsset,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}