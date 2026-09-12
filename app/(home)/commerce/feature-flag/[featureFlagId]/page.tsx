import { DetailPage } from "@/components/detail/detail-page";

import { featureFlagFieldGroups } from "../components/step/field-groups";
import { FeatureFlagServerService } from "@/services/commerce/feature-flag/server";

type Props = {
  params: Promise<{
    featureFlagId: string;
  }>;
};

export default async function FeatureFlagDetailPage({ params }: Props) {
  const { featureFlagId } = await params;

  const featureFlagData = await FeatureFlagServerService.getOne(featureFlagId);

  return (
    <DetailPage
      groups={featureFlagFieldGroups}
      data={featureFlagData}
      title={`Feature Flag ${featureFlagData.key}`}
    />
  );
}
