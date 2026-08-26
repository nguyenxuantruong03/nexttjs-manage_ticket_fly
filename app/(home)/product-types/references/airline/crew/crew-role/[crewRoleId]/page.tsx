import { DetailPage } from "@/components/detail/detail-page";

import { FlyCrewRoleServerService } from "@/services/product-types/references/airline/crew/crew-role/server";

import { flyCrewRoleFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    crewRoleId: string;
  }>;
};

export default async function FlyCrewRoleDetailPage({ params }: Props) {
  const { crewRoleId } = await params;

  const flyCrewRoleData =
    await FlyCrewRoleServerService.getOne(crewRoleId);

  return (
    <DetailPage
      groups={flyCrewRoleFieldGroups}
      data={flyCrewRoleData}
      title={`Fly Crew Role ${flyCrewRoleData.name}`}
    />
  );
}