import { CountryServerService } from "@/services/location/country/server";
import CountryForm from "../../components/CountryForm";

type Props = {
  params: Promise<{
    countryId: string;
  }>;
};

export default async function CountryEditPage({ params }: Props) {
  const { countryId } = await params;
  const countryData = await CountryServerService.getOne(countryId);

  return <CountryForm initialData={countryData} />;
}
