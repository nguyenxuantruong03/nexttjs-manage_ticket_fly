import { DetailPage } from "@/components/detail/detail-page";
import { policyFieldGroups } from "../components/step/field-groups";
import { HotelPolicyServerService } from "@/services/hotel/hotel-policy/server";

type Props = {
  params: Promise<{
    policyId: string;
  }>;
};

export default async function PolicyDetailPage({ params }: Props) {
  const { policyId } = await params;
  const policyData = await HotelPolicyServerService.getOne(policyId);
  return (
    <DetailPage
      groups={policyFieldGroups}
      data={policyData}
      title={`Policy ${policyData.name}`}
    />
  );
}
