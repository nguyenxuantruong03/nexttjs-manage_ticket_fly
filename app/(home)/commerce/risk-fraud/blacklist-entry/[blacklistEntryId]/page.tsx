import { DetailPage } from "@/components/detail/detail-page";

import { blacklistEntryFieldGroups } from "../components/step/field-groups";
import { BlacklistEntryServerService } from "@/services/commerce/risk-fraud/blacklist-entry/server";

type Props = {
  params: Promise<{
    blacklistEntryId: string;
  }>;
};

export default async function BlacklistEntryDetailPage({ params }: Props) {
  const { blacklistEntryId } = await params;

  const blacklistEntryData =
    await BlacklistEntryServerService.getOne(blacklistEntryId);

  return (
    <DetailPage
      groups={blacklistEntryFieldGroups}
      data={blacklistEntryData}
      title={`Blacklist Entry ${blacklistEntryData.value}`}
    />
  );
}
