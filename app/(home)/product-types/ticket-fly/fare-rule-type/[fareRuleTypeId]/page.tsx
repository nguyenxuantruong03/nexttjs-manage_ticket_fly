import { DetailPage } from "@/components/detail/detail-page";

import { FlyFareRuleTypeServerService } from "@/services/product-types/ticket-fly/fare-rule-type/server";

import { flyFareRuleTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    fareRuleTypeId: string;
  }>;
};

export default async function FlyFareRuleTypeDetailPage({ params }: Props) {
  const { fareRuleTypeId } = await params;

  const flyFareRuleTypeData =
    await FlyFareRuleTypeServerService.getOne(fareRuleTypeId);

  return (
    <DetailPage
      groups={flyFareRuleTypeFieldGroups}
      data={flyFareRuleTypeData}
      title={`Fly Fare Rule Type ${flyFareRuleTypeData.name}`}
    />
  );
}
