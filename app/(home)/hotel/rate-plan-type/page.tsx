"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { ratePlanTypeColumns } from "./components/columns";
import {
  useDeleteHotelRatePlanType,
  useHotelRatePlanTypes,
} from "@/hooks/hotel/hotel-rate-plan-type";
import { createRatePlanTypeHandlers } from "./features/handlers";
import { createRatePlanTypeActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const RatePlanTypePage = () => {
  const deleteMutation = useDeleteHotelRatePlanType();
  const { data, isPending, error } = useHotelRatePlanTypes();
  const router = useRouter();

  const handlers = createRatePlanTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createRatePlanTypeActions,
    deleteTitle: "Delete rate plan type",
    deleteDescription: "Are you sure you want to delete this rate plan type?",
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
        columns={ratePlanTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default RatePlanTypePage;
