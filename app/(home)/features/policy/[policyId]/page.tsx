import { DetailPage } from "@/components/detail/detail-page";

import { policyFieldGroups } from "../components/step/field-groups";

import { PolicyServerService } from "@/services/features/policy/server";

type Props = {
  params: Promise<{
    policyId: string;
  }>;
};

export default async function PolicyDetailPage({ params }: Props) {
  const { policyId } = await params;

  const policyData = await PolicyServerService.getOne(policyId);

  return (
    <DetailPage
      groups={policyFieldGroups}
      data={policyData}
      title={`Policy ${policyData.name}`}
    />
  );
}