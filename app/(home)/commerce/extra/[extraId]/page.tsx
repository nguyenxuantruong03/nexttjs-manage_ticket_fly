import { DetailPage } from "@/components/detail/detail-page";

import { extraFieldGroups } from "../components/step/field-groups";

import { ExtraServerService } from "@/services/commerce/extra/server";

type Props = {
  params: Promise<{
    extraId: string;
  }>;
};

export default async function ExtraDetailPage({ params }: Props) {
  const { extraId } = await params;

  const extraData = await ExtraServerService.getOne(extraId);

  return (
    <DetailPage
      groups={extraFieldGroups}
      data={extraData}
      title={`Extra ${extraData.name}`}
    />
  );
}
