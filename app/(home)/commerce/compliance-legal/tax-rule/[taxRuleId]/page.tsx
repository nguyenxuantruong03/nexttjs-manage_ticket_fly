import { DetailPage } from "@/components/detail/detail-page";

import { TaxRuleServerService } from "@/services/commerce/compliance-legal/tax-rule/server";

import { taxRuleFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    taxRuleId: string;
  }>;
};

export default async function TaxRuleDetailPage({ params }: Props) {
  const { taxRuleId } = await params;

  const taxRuleData =
    await TaxRuleServerService.getOne(taxRuleId);

  return (
    <DetailPage
      groups={taxRuleFieldGroups}
      data={taxRuleData}
      title={`Tax Rule ${taxRuleData.id}`}
    />
  );
}