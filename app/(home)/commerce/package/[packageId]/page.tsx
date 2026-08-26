import { DetailPage } from "@/components/detail/detail-page";

import { packageFieldGroups } from "../components/step/field-groups";

import { PackageServerService } from "@/services/commerce/package/server";

type Props = {
  params: Promise<{
    packageId: string;
  }>;
};

export default async function PackageDetailPage({ params }: Props) {
  const { packageId } = await params;

  const packageData = await PackageServerService.getOne(packageId);

  return (
    <DetailPage
      groups={packageFieldGroups}
      data={packageData}
      title={`Package ${packageData.name}`}
    />
  );
}
