import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutCarRentalDocumentType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Car Rental Document Type"
        title="Manage Car Rental Document Type"
        link="/product-types/car-rental/document-type"
        action="Create"
        apiPath="car-rental-document-type"
        description="Car Rental Document Type"
        draft={{
          entity: DraftEntity.CarRentalDocumentType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}