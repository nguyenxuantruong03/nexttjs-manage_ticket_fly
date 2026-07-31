import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutMealPlan({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="MealPlan"
        title="Manage MealPlan"
        link="/hotel/meal-plan"
        action="Create"
        apiPath="meal-plan"
        description="meal-plan"
        draft={{
          entity: DraftEntity.HotelMealPlan,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
