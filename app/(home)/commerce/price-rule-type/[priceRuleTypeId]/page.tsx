import { DetailPage } from "@/components/detail/detail-page";

import { priceRuleTypeFieldGroups } from "../components/step/field-groups";

import { PriceRuleTypeServerService } from "@/services/commerce/price-rule-type/server";

type Props = {
  params: Promise<{
    priceRuleTypeId: string;
  }>;
};

export default async function PriceRuleTypeDetailPage({
  params,
}: Props) {
  const { priceRuleTypeId } = await params;

  const priceRuleTypeData =
    await PriceRuleTypeServerService.getOne(priceRuleTypeId);

  return (
    <DetailPage
      groups={priceRuleTypeFieldGroups}
      data={priceRuleTypeData}
      title={`Price Rule Type ${priceRuleTypeData.name}`}
    />
  );
}