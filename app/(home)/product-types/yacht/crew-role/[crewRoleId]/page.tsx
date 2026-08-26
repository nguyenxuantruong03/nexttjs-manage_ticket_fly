import { DetailPage } from "@/components/detail/detail-page";
import { yachtCrewRoleFieldGroups } from "../components/step/field-groups";
import { YachtCrewRoleServerService } from "@/services/product-types/yacht/crew-role/server";

type Props = {
  params: Promise<{
    crewRoleId: string;
  }>;
};

export default async function YachtCrewRoleDetailPage({ params }: Props) {
  const { crewRoleId } = await params;

  const crewRoleData =
    await YachtCrewRoleServerService.getOne(crewRoleId);

  return (
    <DetailPage
      groups={yachtCrewRoleFieldGroups}
      data={crewRoleData}
      title={`Yacht Crew Role ${crewRoleData.name}`}
    />
  );
}