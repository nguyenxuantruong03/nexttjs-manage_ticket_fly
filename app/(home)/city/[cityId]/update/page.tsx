import { CityServerService } from "@/services/location/city/server";
import CityForm from "../../components/CityForm";

type Props = {
  params: Promise<{
    cityId: string;
  }>;
};

export default async function CityEditPage({ params }: Props) {
  const { cityId } = await params;
  const cityData = await CityServerService.getOne(cityId);

  return <CityForm initialData={cityData} />;
}
