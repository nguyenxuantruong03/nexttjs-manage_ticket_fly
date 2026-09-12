"use client";

import FormSection from "@/components/form/FormSection";

import { EntityOption } from "@/components/form/entity-selector";

import { RegulationFormSchema } from "../form/schema";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { RegulationCategory } from "@/types/common/commerce/compliance-legal.type";
import RegulationCategoryCreateDialog from "../../../regulation-category/components/RegulationCategoryCreateDialog";

interface CategoryStepProps {
  regulationCategoryData: RegulationCategory[];
}

export default function CategoryStep({
  regulationCategoryData,
}: CategoryStepProps) {
  const categoryOptions: EntityOption<RegulationCategory>[] =
    regulationCategoryData.map((category) => ({
      value: category.id,
      label: category.name,
      data: category,
    }));

  return (
    <FormSection
      title="Category"
      description="Select the category for this regulation"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<RegulationFormSchema, RegulationCategory>
          name="categoryId"
          label="Category"
          placeholder="Select regulation category..."
          searchPlaceholder="Search regulation categories..."
          emptyText="No regulation categories found"
          createText="Create regulation category"
          options={categoryOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <RegulationCategoryCreateDialog {...props} />
          )}
        />
      </div>
    </FormSection>
  );
}
