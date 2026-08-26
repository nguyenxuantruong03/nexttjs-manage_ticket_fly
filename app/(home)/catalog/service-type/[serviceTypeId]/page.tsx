import { DetailPage } from "@/components/detail/detail-page";

import { ServiceTypeServerService } from "@/services/catalog/service-type/server";

import { serviceTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    serviceTypeId: string;
  }>;
};

export default async function ServiceTypeDetailPage({
  params,
}: Props) {
  const { serviceTypeId } = await params;

  const serviceTypeData =
    await ServiceTypeServerService.getOne(serviceTypeId);

  return (
    <DetailPage
      groups={serviceTypeFieldGroups}
      data={serviceTypeData}
      title={`Service Type ${serviceTypeData.name}`}
    />
  );
}