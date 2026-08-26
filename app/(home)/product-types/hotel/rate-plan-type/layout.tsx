import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutRatePlanType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="RatePlanType"
        title="Manage RatePlanType"
        link="/product-types/hotel/rate-plan-type"
        action="Create"
        apiPath="rate-plan-type"
        description="rate-plan-type"
        draft={{
          entity: DraftEntity.HotelRatePlanType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
