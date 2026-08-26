import { DetailPage } from "@/components/detail/detail-page";

import { FlyDelayReasonServerService } from "@/services/product-types/ticket-fly/delay-reason/server";

import { flyDelayReasonFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    delayReasonId: string;
  }>;
};

export default async function FlyDelayReasonDetailPage({ params }: Props) {
  const { delayReasonId } = await params;

  const flyDelayReasonData =
    await FlyDelayReasonServerService.getOne(delayReasonId);

  return (
    <DetailPage
      groups={flyDelayReasonFieldGroups}
      data={flyDelayReasonData}
      title={`Fly Delay Reason ${flyDelayReasonData.name}`}
    />
  );
}
