import { CityServerService } from "@/services/location/city/server";
import { cityFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    cityId: string;
  }>;
};

export default async function CityDetailPage({ params }: Props) {
  const { cityId } = await params;

  const cityData = await CityServerService.getOne(cityId);
  
    return (
      <DetailPage
        groups={cityFieldGroups}
        data={cityData}
        title={`City ${cityData.name}`}
      />
    )
}
