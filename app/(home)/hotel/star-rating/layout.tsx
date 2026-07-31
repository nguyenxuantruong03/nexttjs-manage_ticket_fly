import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutStarRating({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="StarRating"
        title="Manage StarRating"
        link="/hotel/star-rating"
        action="Create"
        apiPath="star-rating"
        description="star-rating"
        draft={{
          entity: DraftEntity.HotelStarRating,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
