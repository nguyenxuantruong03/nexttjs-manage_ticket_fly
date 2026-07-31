"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { mealPlanColumns } from "./components/columns";
import {
  useDeleteHotelMealPlan,
  useHotelMealPlans,
} from "@/hooks/hotel/hotel-meal-plan";
import { createMealPlanHandlers } from "./features/handlers";
import { createMealPlanActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const MealPlanPage = () => {
  const deleteMutation = useDeleteHotelMealPlan();
  const { data, isPending, error } = useHotelMealPlans();
  const router = useRouter();

  const handlers = createMealPlanHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createMealPlanActions,
    deleteTitle: "Delete mealPlan",
    deleteDescription: "Are you sure you want to delete this mealPlan?",
  });

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {deleteDialog.dialog}
      <DataTable
        columns={mealPlanColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default MealPlanPage;
