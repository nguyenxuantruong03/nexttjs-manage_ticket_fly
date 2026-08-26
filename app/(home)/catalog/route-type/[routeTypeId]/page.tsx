import { DetailPage } from "@/components/detail/detail-page";

import { RouteTypeServerService } from "@/services/catalog/route-type/server";

import { routeTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    routeTypeId: string;
  }>;
};

export default async function RouteTypeDetailPage({ params }: Props) {
  const { routeTypeId } = await params;

  const routeTypeData =
    await RouteTypeServerService.getOne(routeTypeId);

  return (
    <DetailPage
      groups={routeTypeFieldGroups}
      data={routeTypeData}
      title={`Route Type ${routeTypeData.name}`}
    />
  );
}