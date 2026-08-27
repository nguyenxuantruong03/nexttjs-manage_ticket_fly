import { DetailPage } from "@/components/detail/detail-page";
import { facilityFieldGroups } from "../components/step/field-groups";
import { FacilityServerService } from "@/services/features/facility/server";

type Props = {
  params: Promise<{
    facilityId: string;
  }>;
};

export default async function FacilityDetailPage({ params }: Props) {
  const { facilityId } = await params;

  const facilityData = await FacilityServerService.getOne(facilityId);

  return (
    <DetailPage
      groups={facilityFieldGroups}
      data={facilityData}
      title={`Facility ${facilityData.name}`}
    />
  );
}
