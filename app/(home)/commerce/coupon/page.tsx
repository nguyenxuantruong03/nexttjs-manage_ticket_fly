"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { couponColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createCouponActions } from "./features/actions";
import { createCouponHandlers } from "./features/handlers";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useDeleteCoupon, useCoupons } from "@/hooks/commerce/coupon";

const Coupon = () => {
  const router = useRouter();

  const deleteMutation = useDeleteCoupon();
  const { data, isPending, error } = useCoupons();

  const handlers = createCouponHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCouponActions,
    deleteTitle: "Delete coupon",
    deleteDescription: "Are you sure you want to delete this coupon?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={couponColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default Coupon;
