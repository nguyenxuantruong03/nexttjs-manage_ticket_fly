"use client";

import FormSection from "@/components/form/FormSection";
import { EntityOption } from "@/components/form/entity-selector";
import { ReasonCodeFormSchema } from "../form/schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { ReasonContext } from "@/types/common/catalog/reason-code.type";
import ReasonContextCreateDialog from "../../../reason-context/components/ReasonContextCreateDialog";

interface ContextStepProps {
  contextData: ReasonContext[];
}

export default function ContextStep({ contextData }: ContextStepProps) {
  const contextOptions: EntityOption<ReasonContext>[] = contextData.map(
    (context) => ({
      value: context.id,
      label: context.name,
      data: context,
    }),
  );

  return (
    <FormSection
      title="Context"
      description="Select the context for this reason code"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<ReasonCodeFormSchema, ReasonContext>
          name="contextId"
          label="Context"
          placeholder="Search context..."
          searchPlaceholder="Search context..."
          emptyText="No context found"
          options={contextOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <ReasonContextCreateDialog {...props} />
          )}
        />
      </div>
    </FormSection>
  );
}
