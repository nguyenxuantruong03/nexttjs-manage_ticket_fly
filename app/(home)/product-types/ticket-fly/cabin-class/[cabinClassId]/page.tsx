import { DetailPage } from "@/components/detail/detail-page";

import { FlyCabinClassServerService } from "@/services/product-types/ticket-fly/cabin-class/server";

import { flyCabinClassFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    cabinClassId: string;
  }>;
};

export default async function FlyCabinClassDetailPage({ params }: Props) {
  const { cabinClassId } = await params;

  const flyCabinClassData =
    await FlyCabinClassServerService.getOne(cabinClassId);

  return (
    <DetailPage
      groups={flyCabinClassFieldGroups}
      data={flyCabinClassData}
      title={`Fly Cabin Class ${flyCabinClassData.name}`}
    />
  );
}
