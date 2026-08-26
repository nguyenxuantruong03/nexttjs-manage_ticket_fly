import { DetailPage } from "@/components/detail/detail-page";
import { mealPlanFieldGroups } from "../components/step/field-groups";
import { HotelMealPlanServerService } from "@/services/product-types/hotel/hotel-meal-plan/server";

type Props = {
  params: Promise<{
    mealPlanId: string;
  }>;
};

export default async function MealPlanDetailPage({ params }: Props) {
  const { mealPlanId } = await params;
  const mealPlanData =
    await HotelMealPlanServerService.getOne(mealPlanId);
  return (
    <DetailPage
      groups={mealPlanFieldGroups}
      data={mealPlanData}
      title={`MealPlan ${mealPlanData.name}`}
    />
  );
}
