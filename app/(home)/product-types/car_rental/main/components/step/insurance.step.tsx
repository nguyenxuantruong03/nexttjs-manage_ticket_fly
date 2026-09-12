// step/insurance.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";
import { EntityOption } from "@/components/form/entity-selector";
import {
  InsuranceBenefitType,
  InsuranceType,
} from "@/types/product-types/car_rental/insurance-type.type";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import CarRentalInsuranceBenefitTypeCreateDialog from "../../../insurance-benefit-type/components/CarRentalInsuranceBenefitTypeCreateDialog";
import CarRentalInsuranceTypeCreateDialog from "../../../insurance-type/components/CarRentalInsuranceTypeCreateDialog";

interface InsuranceStepProps {
  insuranceTypeData: InsuranceType[];
  insuranceBenefitTypeData: InsuranceBenefitType[];
}

export default function InsuranceStep({
  insuranceTypeData,
  insuranceBenefitTypeData,
}: InsuranceStepProps) {
  const insuranceTypeOptions: EntityOption<InsuranceType>[] =
    insuranceTypeData.map((insuranceType) => ({
      value: insuranceType.id,
      label: insuranceType.name ?? "",
      description: insuranceType.description ?? undefined,
      data: insuranceType,
    }));

  const insuranceBenefitTypeOptions: EntityOption<InsuranceBenefitType>[] =
    insuranceBenefitTypeData.map((insuranceBenefitType) => ({
      value: insuranceBenefitType.id,
      label: insuranceBenefitType.name ?? "",
      description: insuranceBenefitType.description ?? undefined,
      data: insuranceBenefitType,
    }));
  return (
    <>
      <FormSection title="Insurance" description="Rental insurance options">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<CarRentalFormSchema, InsuranceType>
            name="insurances.0.typeId"
            label="Insurance Type"
            placeholder="Search insurance type..."
            searchPlaceholder="Search insurance type..."
            emptyText="No insurance type found"
            createText="Create insurance type"
            options={insuranceTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <CarRentalInsuranceTypeCreateDialog {...props} />
            )}
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.name"
            label="Insurance Name"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.description"
            label="Description"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.pricePerDay"
            label="Price Per Day"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.fixedPrice"
            label="Fixed Price"
            type="number"
          />

          <FormSwitch<CarRentalFormSchema>
            name="insurances.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection
        title="Insurance Benefits"
        description="Insurance coverage details"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<CarRentalFormSchema, InsuranceBenefitType>
            name="insurances.0.benefits.0.typeId"
            label="Insurance Benefit Type"
            placeholder="Search insurance benefit type..."
            searchPlaceholder="Search insurance benefit type..."
            emptyText="No insurance benefit type found"
            createText="Create insurance benefit type"
            options={insuranceBenefitTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <CarRentalInsuranceBenefitTypeCreateDialog {...props} />
            )}
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.benefits.0.title"
            label="Title"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.benefits.0.description"
            label="Description"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.benefits.0.coverageAmount"
            label="Coverage Amount"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.benefits.0.excessAmount"
            label="Excess Amount"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
