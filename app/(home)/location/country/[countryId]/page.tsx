import { CountryServerService } from "@/services/location/country/server";
import { countryFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    countryId: string;
  }>;
};

export default async function CountryDetailPage({ params }: Props) {
  const { countryId } = await params;
  const countryData = await CountryServerService.getOne(countryId);

  return (
    <DetailPage
      groups={countryFieldGroups}
      data={countryData}
      title={`Country ${countryData.name}`}
    />
  );
}
