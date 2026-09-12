import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { EntityOption } from "@/components/form/entity-selector";

import { YachtFormSchema } from "../form/schema/core/yacht.schema";
import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";
import YachtCrewRoleCreateDialog from "../../../crew-role/components/YachtCrewRoleCreateDialog";

interface CrewStepProps {
  crewRoleData: YachtCrewRole[];
}

export default function CrewStep({ crewRoleData }: CrewStepProps) {
  const crewRoleOptions: EntityOption<YachtCrewRole>[] = crewRoleData.map(
    (crewRole) => ({
      value: crewRole.id,
      label: crewRole.name,
      description: crewRole.description ?? undefined,
      data: crewRole,
    }),
  );

  return (
    <>
      <FormSection title="Crew Information" description="Yacht crew members">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema> name="crew.0.name" label="Crew Name" />

          <FormEntitySelector<YachtFormSchema, YachtCrewRole>
            name="crew.0.roleId"
            label="Crew Role"
            placeholder="Search crew role..."
            searchPlaceholder="Search crew role..."
            emptyText="No crew role found"
            createText="Create crew role"
            options={crewRoleOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <YachtCrewRoleCreateDialog {...props} />
            )}
          />

          <FormInput<YachtFormSchema> name="crew.0.avatar" label="Avatar URL" />

          <FormInput<YachtFormSchema>
            name="crew.0.experienceYears"
            label="Experience Years"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="crew.0.languages.0"
            label="Language"
          />
          <FormSwitch<YachtFormSchema> name="crew.0.active" label="Active" />
        </div>
      </FormSection>
    </>
  );
}
