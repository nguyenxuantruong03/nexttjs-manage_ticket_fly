import { DetailPage } from "@/components/detail/detail-page";

import { FlyMealTypeServerService } from "@/services/product-types/ticket-fly/meal-type/server";

import { flyMealTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    mealTypeId: string;
  }>;
};

export default async function FlyMealTypeDetailPage({ params }: Props) {
  const { mealTypeId } = await params;

  const flyMealTypeData = await FlyMealTypeServerService.getOne(mealTypeId);

  return (
    <DetailPage
      groups={flyMealTypeFieldGroups}
      data={flyMealTypeData}
      title={`Fly Meal Type ${flyMealTypeData.name}`}
    />
  );
}
