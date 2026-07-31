import { DetailPage } from "@/components/detail/detail-page";
import { policyTypeFieldGroups } from "../components/step/field-groups";
import { HotelPolicyTypeServerService } from "@/services/hotel/hotel-policy-type/server";

type Props = {
  params: Promise<{
    policyTypeId: string;
  }>;
};

export default async function PolicyTypeDetailPage({ params }: Props) {
  const { policyTypeId } = await params;
  const policyTypeData =
    await HotelPolicyTypeServerService.getOne(policyTypeId);
  return (
    <DetailPage
      groups={policyTypeFieldGroups}
      data={policyTypeData}
      title={`PolicyType ${policyTypeData.name}`}
    />
  );
}
