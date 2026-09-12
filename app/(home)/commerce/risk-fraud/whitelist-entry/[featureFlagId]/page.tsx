import { DetailPage } from "@/components/detail/detail-page";

import { whitelistEntryFieldGroups } from "../components/step/field-groups";
import { WhitelistEntryServerService } from "@/services/commerce/risk-fraud/whitelist-entry/server";

type Props = {
  params: Promise<{
    whitelistEntryId: string;
  }>;
};

export default async function WhitelistEntryDetailPage({ params }: Props) {
  const { whitelistEntryId } = await params;

  const whitelistEntryData =
    await WhitelistEntryServerService.getOne(whitelistEntryId);

  return (
    <DetailPage
      groups={whitelistEntryFieldGroups}
      data={whitelistEntryData}
      title={`Whitelist Entry ${whitelistEntryData.value}`}
    />
  );
}
