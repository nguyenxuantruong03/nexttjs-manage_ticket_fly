import { DetailPage } from "@/components/detail/detail-page";
import { reasonCodeFieldGroups } from "../components/step/field-groups";
import { ReasonCodeServerService } from "@/services/catalog/reason/reason-code/server";

type Props = {
  params: Promise<{
    reasonCodeId: string;
  }>;
};

export default async function ReasonCodeDetailPage({ params }: Props) {
  const { reasonCodeId } = await params;

  const reasonCodeData = await ReasonCodeServerService.getOne(reasonCodeId);

  return (
    <DetailPage
      groups={reasonCodeFieldGroups}
      data={reasonCodeData}
      title={`Reason Code ${reasonCodeData.title}`}
    />
  );
}
