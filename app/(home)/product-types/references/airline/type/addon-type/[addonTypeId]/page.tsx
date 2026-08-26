import { DetailPage } from "@/components/detail/detail-page";

import { FlyAddonTypeServerService } from "@/services/product-types/references/airline/addon-type/server";

import { flyAddonTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    addonTypeId: string;
  }>;
};

export default async function FlyAddonTypeDetailPage({ params }: Props) {
  const { addonTypeId } = await params;

  const flyAddonTypeData = await FlyAddonTypeServerService.getOne(addonTypeId);

  return (
    <DetailPage
      groups={flyAddonTypeFieldGroups}
      data={flyAddonTypeData}
      title={`Fly Addon Type ${flyAddonTypeData.name}`}
    />
  );
}
