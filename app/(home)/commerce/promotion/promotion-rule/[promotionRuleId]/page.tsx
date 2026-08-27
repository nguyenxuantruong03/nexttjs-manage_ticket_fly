import { DetailPage } from "@/components/detail/detail-page";

import { promotionRuleFieldGroups } from "../components/step/field-groups";

import { PromotionRuleServerService } from "@/services/commerce/promotion-rule/server";

type Props = {
  params: Promise<{
    promotionRuleId: string;
  }>;
};

export default async function PromotionRuleDetailPage({ params }: Props) {
  const { promotionRuleId } = await params;

  const promotionRuleData =
    await PromotionRuleServerService.getOne(promotionRuleId);

  return (
    <DetailPage
      groups={promotionRuleFieldGroups}
      data={promotionRuleData}
      title={`Promotion Rule ${promotionRuleData.id}`}
    />
  );
}
