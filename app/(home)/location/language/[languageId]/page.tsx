import { LanguageServerService } from "@/services/location/language/server";
import { languageFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    languageId: string;
  }>;
};

export default async function languageDetailPage({ params }: Props) {
  const { languageId } = await params;
  const languageData = await LanguageServerService.getOne(languageId);
  return (
    <DetailPage
      groups={languageFieldGroups}
      data={languageData}
      title={`Language ${languageData.name}`}
    />
  );
}
