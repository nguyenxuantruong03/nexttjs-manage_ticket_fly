import { DetailPage } from "@/components/detail/detail-page";
import { SearchTagServerService } from "@/services/search/tag/server";
import { searchTagFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    tagId: string;
  }>;
};

export default async function SearchTagDetailPage({ params }: Props) {
  const { tagId } = await params;

  const searchTagData = await SearchTagServerService.getOne(tagId);

  return (
    <DetailPage
      groups={searchTagFieldGroups}
      data={searchTagData}
      title={`Tag ${searchTagData.name}`}
    />
  );
}
