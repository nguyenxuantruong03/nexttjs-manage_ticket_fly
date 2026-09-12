"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { promotionColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createPromotionActions } from "./features/actions";
import { createPromotionHandlers } from "./features/handlers";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useDeletePromotion, usePromotions } from "@/hooks/commerce/promotion";

const Promotion = () => {
  const router = useRouter();

  const deleteMutation = useDeletePromotion();
  const { data, isPending, error } = usePromotions();

  const handlers = createPromotionHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createPromotionActions,
    deleteTitle: "Delete promotion",
    deleteDescription: "Are you sure you want to delete this promotion?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={promotionColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default Promotion;
