"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateTaxRule,
  useUpdateTaxRule,
} from "@/hooks/commerce/compliance-legal/tax-rule";

import { BookingType } from "@/types/common/commerce/booking-type";

import { TaxRuleFormSchema } from "./form/schema";

import CountryStep from "./step/country.step";

import BookingTypeStep from "./step/booking-type.step";

import TaxStep from "./step/tax.step";

import StatusStep from "./step/status.step";

import { taxRuleFormConfig } from "./config";
import { TaxRule } from "@/types/common/commerce/compliance-legal.type";
import EffectivePeriodStep from "./step/effectivePeriod.step";

// ======================================================
// PROPS
// ======================================================

interface TaxRuleFormProps {
  initialData?: TaxRule;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export default function TaxRuleForm({
  initialData,

  bookingTypeData,

  redirect = true,
}: TaxRuleFormProps) {
  // ======================================================
  // MUTATIONS
  // ======================================================

  const createTaxRule = useCreateTaxRule();

  const updateTaxRule = useUpdateTaxRule();

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityFormWizard<TaxRuleFormSchema, TaxRule>
      initialData={initialData}
      redirect={redirect}
      config={taxRuleFormConfig}
      createMutation={createTaxRule}
      updateMutation={updateTaxRule}
    >
      {/* ======================================================
          STEP 0 - COUNTRY
      ====================================================== */}

      <FormWizardStep index={0}>
        <CountryStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 1 - BOOKING TYPE
      ====================================================== */}

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      {/* ======================================================
          STEP 2 - TAX
      ====================================================== */}

      <FormWizardStep index={2}>
        <TaxStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 3 - EFFECTIVE PERIOD
      ====================================================== */}

      <FormWizardStep index={3}>
        <EffectivePeriodStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 4 - STATUS
      ====================================================== */}

      <FormWizardStep index={4}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
