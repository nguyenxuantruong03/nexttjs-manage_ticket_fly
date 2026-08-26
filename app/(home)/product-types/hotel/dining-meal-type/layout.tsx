import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutDiningMealType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="DiningMealType"
        title="Manage DiningMealType"
        link="/product-types/hotel/dining-meal-type"
        action="Create"
        apiPath="dining-meal-type"
        description="dining-meal-type"
        draft={{
          entity: DraftEntity.HotelDiningMealType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
