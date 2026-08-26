import { DetailPage } from "@/components/detail/detail-page";

import { extraFeeTypeFieldGroups } from "../components/step/field-groups";

import { ExtraFeeTypeServerService } from "@/services/commerce/extra-fee-type/server";

type Props = {
  params: Promise<{
    extraFeeTypeId: string;
  }>;
};

export default async function ExtraFeeTypeDetailPage({ params }: Props) {
  const { extraFeeTypeId } = await params;

  const extraFeeTypeData =
    await ExtraFeeTypeServerService.getOne(extraFeeTypeId);

  return (
    <DetailPage
      groups={extraFeeTypeFieldGroups}
      data={extraFeeTypeData}
      title={`Extra Fee Type ${extraFeeTypeData.name}`}
    />
  );
}
