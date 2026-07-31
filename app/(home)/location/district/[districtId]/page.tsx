import { DistrictServerService } from "@/services/location/district/server";
import { districtFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    districtId: string;
  }>;
};

export default async function DistrictDetailPage({ params }: Props) {
  const { districtId } = await params;
  const districtData = await DistrictServerService.getOne(districtId);
  return (
    <DetailPage
      groups={districtFieldGroups}
      data={districtData}
      title={`District ${districtData.name}`}
    />
  );
}
