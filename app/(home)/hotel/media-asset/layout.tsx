import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutMediaAsset({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="MediaAsset"
        title="Manage MediaAsset"
        link="/hotel/media-asset"
        action="Create"
        apiPath="media-asset"
        description="media-asset"
        draft={{
          entity: DraftEntity.HotelMediaAsset,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
