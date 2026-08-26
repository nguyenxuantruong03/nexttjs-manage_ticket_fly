import { DetailPage } from "@/components/detail/detail-page";

import { policyTypeFieldGroups } from "../components/step/field-groups";

import { PolicyTypeServerService } from "@/services/features/policy-type/server";

type Props = {
  params: Promise<{
    policyTypeId: string;
  }>;
};

export default async function PolicyTypeDetailPage({
  params,
}: Props) {
  const { policyTypeId } = await params;

  const policyTypeData =
    await PolicyTypeServerService.getOne(policyTypeId);

  return (
    <DetailPage
      groups={policyTypeFieldGroups}
      data={policyTypeData}
      title={`Policy Type ${policyTypeData.name}`}
    />
  );
}