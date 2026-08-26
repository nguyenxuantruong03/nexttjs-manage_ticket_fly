import { DetailPage } from "@/components/detail/detail-page";
import { continentFieldGroups } from "../components/step/field-groups";
import { ContinentServerService } from "@/services/location/country/continent/server";

type Props = {
  params: Promise<{
    continentId: string;
  }>;
};

export default async function ContinentDetailPage({ params }: Props) {
  const { continentId } = await params;

  const continentData = await ContinentServerService.getOne(continentId);

  return (
    <DetailPage
      groups={continentFieldGroups}
      data={continentData}
      title={`Continent ${continentData.name}`}
    />
  );
}
