"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyMealType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Meal Type"
        title="Manage Fly Meal Type"
        link="/product-types/ticket-fly/meal-type"
        action="Create"
        apiPath="ticket-fly/meal-type"
        description="Fly-meal-type"
        draft={{
          entity: DraftEntity.FlyMealType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
