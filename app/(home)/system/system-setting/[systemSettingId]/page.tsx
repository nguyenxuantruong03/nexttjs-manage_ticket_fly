import { DetailPage } from "@/components/detail/detail-page";

import { systemSettingFieldGroups } from "../components/steps/field-groups";
import { SystemSettingServerService } from "@/services/system/system-setting/server";

type Props = {
  params: Promise<{
    systemSettingId: string;
  }>;
};

export default async function SystemSettingDetailPage({ params }: Props) {
  const { systemSettingId } = await params;

  const systemSettingData =
    await SystemSettingServerService.getOne(systemSettingId);

  return (
    <DetailPage
      groups={systemSettingFieldGroups}
      data={systemSettingData}
      title={`System Setting ${systemSettingData.key}`}
    />
  );
}
