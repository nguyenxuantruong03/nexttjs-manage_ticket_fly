import { DetailPage } from "@/components/detail/detail-page";

import { FlyAllianceServerService } from "@/services/product-types/references/alliance/server";

import { flyAllianceFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    allianceId: string;
  }>;
};

export default async function FlyAllianceDetailPage({ params }: Props) {
  const { allianceId } = await params;

  const flyAllianceData = await FlyAllianceServerService.getOne(allianceId);

  return (
    <DetailPage
      groups={flyAllianceFieldGroups}
      data={flyAllianceData}
      title={`Fly Alliance ${flyAllianceData.name}`}
    />
  );
}
