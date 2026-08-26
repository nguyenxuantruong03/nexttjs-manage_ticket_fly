import { DetailPage } from "@/components/detail/detail-page";
import { yachtConditionFieldGroups } from "../components/step/field-groups";
import { YachtConditionServerService } from "@/services/product-types/yacht/condition/server";

type Props = {
  params: Promise<{
    conditionId: string;
  }>;
};

export default async function YachtConditionDetailPage({ params }: Props) {
  const { conditionId } = await params;

  const conditionData =
    await YachtConditionServerService.getOne(conditionId);

  return (
    <DetailPage
      groups={yachtConditionFieldGroups}
      data={conditionData}
      title={`Yacht Condition ${conditionData.name}`}
    />
  );
}