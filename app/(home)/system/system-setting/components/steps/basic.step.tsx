"use client";

import {
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";
import FormSection from "@/components/form/FormSection";
import { SystemSettingFormSchema } from "../form/schema";

interface BasicSectionProps {
  value: SystemSettingFormSchema["value"];
}

export default function BasicSection({ value }: BasicSectionProps) {
  const renderValueField = () => {
    if (typeof value === "boolean") {
      return <FormSwitch<SystemSettingFormSchema> name="value" label="Value" />;
    }

    if (typeof value === "number") {
      return (
        <FormInput<SystemSettingFormSchema>
          name="value"
          label="Value"
          type="number"
          placeholder="Enter number value"
        />
      );
    }

    if (typeof value === "object" && value !== null) {
      return (
        <FormTextarea<SystemSettingFormSchema>
          name="value"
          label="Value"
          placeholder='{"key": "value"}'
        />
      );
    }

    return (
      <FormTextarea<SystemSettingFormSchema>
        name="value"
        label="Value"
        placeholder="Enter setting value"
      />
    );
  };

  return (
    <FormSection
      title="Basic Information"
      description="System setting configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<SystemSettingFormSchema>
          name="key"
          label="Key"
          placeholder="Enter setting key"
        />

        {renderValueField()}
      </div>
    </FormSection>
  );
}
