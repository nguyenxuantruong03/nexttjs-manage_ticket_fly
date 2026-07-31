import { TimezoneServerService } from "@/services/location/timezone/server";
import { timezoneFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    timezoneId: string;
  }>;
};

export default async function TimezoneDetailPage({ params }: Props) {
  const { timezoneId } = await params;
  const timezoneData = await TimezoneServerService.getOne(timezoneId);
  return (
    <DetailPage
      groups={timezoneFieldGroups}
      data={timezoneData}
      title={`Timezone ${timezoneData.name}`}
    />
  );
}
