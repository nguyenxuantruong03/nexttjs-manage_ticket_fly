import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutHotelCheckInPolicy({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Check-In Policy"
        title="Manage Check-In Policy"
        link="/product-types/hotel/check-in-policy"
        action="Create"
        apiPath="check-in-policy"
        description="check-in policy"
        draft={{
          entity: DraftEntity.HotelCheckInPolicy,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">
          {children}
        </div>
      </FormPage>
    </FormPageProvider>
  );
}