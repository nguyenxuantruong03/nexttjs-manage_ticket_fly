// step/required-documents.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import CarRentalDocumentTypeCreateDialog from "../../../document-type/components/CarRentalDocumentTypeCreateDialog";
import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

interface RequiredDocumentsStepProps {
  documentTypeData: CarRentalDocumentType[];
}

export default function RequiredDocumentsStep({
  documentTypeData,
}: RequiredDocumentsStepProps) {
  const documentTypeOptions: EntityOption<CarRentalDocumentType>[] =
    documentTypeData.map((documentType) => ({
      value: documentType.id,
      label: documentType.name,
      description: documentType.description ?? undefined,
      data: documentType,
    }));

  return (
    <>
      <FormSection
        title="Required Documents"
        description="Documents required from renters"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<CarRentalFormSchema, CarRentalDocumentType>
            name="requiredDocuments.0.documentTypeId"
            label="Document Type"
            placeholder="Search document type..."
            searchPlaceholder="Search document type..."
            emptyText="No document type found"
            createText="Create document type"
            options={documentTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <CarRentalDocumentTypeCreateDialog {...props} />
            )}
          />

          <FormSwitch<CarRentalFormSchema>
            name="requiredDocuments.0.mandatory"
            label="Mandatory"
          />

          <FormInput<CarRentalFormSchema>
            name="requiredDocuments.0.note"
            label="Note"
          />
        </div>
      </FormSection>
    </>
  );
}
