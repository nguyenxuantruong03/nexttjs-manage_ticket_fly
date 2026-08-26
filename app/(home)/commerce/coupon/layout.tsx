import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutCoupon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Coupon"
        title="Manage Coupon"
        link="/commerce/coupon"
        action="Create"
        apiPath="/coupon"
        description="Coupon"
        draft={{
          entity: DraftEntity.Coupon,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}