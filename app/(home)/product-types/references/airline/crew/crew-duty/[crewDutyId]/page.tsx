import { DetailPage } from "@/components/detail/detail-page";

import { FlyCrewDutyServerService } from "@/services/product-types/references/airline/crew/crew-duty/server";

import { flyCrewDutyFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    crewDutyId: string;
  }>;
};

export default async function FlyCrewDutyDetailPage({ params }: Props) {
  const { crewDutyId } = await params;

  const flyCrewDutyData = await FlyCrewDutyServerService.getOne(crewDutyId);

  return (
    <DetailPage
      groups={flyCrewDutyFieldGroups}
      data={flyCrewDutyData}
      title={`Fly Crew Duty ${flyCrewDutyData.name}`}
    />
  );
}
