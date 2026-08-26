"use client";

import FormSection from "@/components/form/FormSection";

import { FlyCrewFormSchema } from "../form/schema";

import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import FlyCrewRoleCreateDialog from "../../../crew-role/components/FlyCrewRoleCreateDialog";

interface RoleStepProps {
  roleData: FlyCrewRole[];
}

export default function RoleStep({ roleData }: RoleStepProps) {
  const roleEntityOptions: EntityOption<FlyCrewRole>[] = roleData.map(
    (role) => ({
      value: role.id,
      label: role.name,
      description: role.description ?? undefined,
      data: role,
    }),
  );

  return (
    <FormSection
      title="Crew Role"
      description="Select the role for this crew member"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<FlyCrewFormSchema, FlyCrewRole>
          name="roleId"
          label="Crew Role"
          placeholder="Search crew role..."
          searchPlaceholder="Search crew role..."
          emptyText="No crew role found"
          createText="Create crew role"
          options={roleEntityOptions}
          enableCreate
          renderCreateDialog={(props) => <FlyCrewRoleCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
}
