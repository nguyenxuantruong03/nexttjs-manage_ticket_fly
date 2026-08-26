"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { accessibilityColumns } from "./components/columns";
import {
  useDeleteHotelAccessibility,
  useHotelAccessibilities,
} from "@/hooks/product-types/hotel/hotel-accessibility";
import { createAccessibilityHandlers } from "./features/handlers";
import { createAccessibilityActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const AccessibilityPage = () => {
  const deleteMutation = useDeleteHotelAccessibility();
  const { data, isPending, error } = useHotelAccessibilities();
  const router = useRouter();

  const handlers = createAccessibilityHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createAccessibilityActions,
    deleteTitle: "Delete accessibility",
    deleteDescription: "Are you sure you want to delete this accessibility?",
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
        columns={accessibilityColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default AccessibilityPage;
