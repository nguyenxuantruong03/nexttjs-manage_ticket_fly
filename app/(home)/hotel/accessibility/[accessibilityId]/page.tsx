import { DetailPage } from "@/components/detail/detail-page";
import { accessibilityFieldGroups } from "../components/step/field-groups";
import { HotelAccessibilityServerService } from "@/services/hotel/hotel-accessibility/server";

type Props = {
  params: Promise<{
    accessibilityId: string;
  }>;
};

export default async function AccessibilityDetailPage({ params }: Props) {
  const { accessibilityId } = await params;
  const accessibilityData =
    await HotelAccessibilityServerService.getOne(accessibilityId);
  return (
    <DetailPage
      groups={accessibilityFieldGroups}
      data={accessibilityData}
      title={`Accessibility ${accessibilityData.name}`}
    />
  );
}
