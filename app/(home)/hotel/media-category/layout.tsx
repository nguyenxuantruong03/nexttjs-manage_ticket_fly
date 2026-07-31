import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutMediaCategory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="MediaCategory"
        title="Manage MediaCategory"
        link="/hotel/media-category"
        action="Create"
        apiPath="media-category"
        description="media-category"
        draft={{
          entity: DraftEntity.HotelMediaCategory,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
