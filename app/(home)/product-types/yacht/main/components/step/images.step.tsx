import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { YachtFormSchema } from "../form/schema/core/yacht.schema";

export default function ImagesStep() {
  return (
    <>
      <FormSection title="Yacht Images" description="Main yacht gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema> name="image.0.mediaId" label="Media ID" />
          <FormInput<YachtFormSchema>
            name="image.0.categoryId"
            label="Category ID"
          />
          <FormSwitch<YachtFormSchema>
            name="image.0.isPrimary"
            label="Primary Image"
          />
          <FormInput<YachtFormSchema>
            name="image.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
