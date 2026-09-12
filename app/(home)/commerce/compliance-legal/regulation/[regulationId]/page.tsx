import { DetailPage } from "@/components/detail/detail-page";

import { regulationFieldGroups } from "../components/step/field-groups";
import { RegulationServerService } from "@/services/commerce/compliance-legal/regulation/server";

type Props = {
  params: Promise<{
    regulationId: string;
  }>;
};

export default async function RegulationDetailPage({ params }: Props) {
  const { regulationId } = await params;

  const regulationData = await RegulationServerService.getOne(regulationId);

  return (
    <DetailPage
      groups={regulationFieldGroups}
      data={regulationData}
      title={`Regulation ${regulationData.content}`}
    />
  );
}
