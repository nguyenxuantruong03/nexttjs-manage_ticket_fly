import { DetailPage } from "@/components/detail/detail-page";

import { FlyCrewServerService } from "@/services/product-types/references/airline/crew/server";

import { flyCrewFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    crewId: string;
  }>;
};

export default async function FlyCrewDetailPage({
  params,
}: Props) {
  const { crewId } = await params;

  const flyCrewData =
    await FlyCrewServerService.getOne(crewId);

  return (
    <DetailPage
      groups={flyCrewFieldGroups}
      data={flyCrewData}
      title={`Fly Crew ${flyCrewData.firstName} ${flyCrewData.lastName}`}
    />
  );
}