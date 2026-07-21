"use client";

import { DataTable } from "@/components/ui/data-table";
import { currencyColumns } from "./components/columns";
import { useCurrencies, useDeleteCurrency } from "@/hooks/location/currency";
import { useRouter } from "next/navigation";
import { createCurrencyActions } from "./features/actions";
import { createCurrencyHandlers } from "./features/handlers";

const Currency = () => {
  const deleteMutation = useDeleteCurrency();
  const { data, isPending, error } = useCurrencies();
  const router = useRouter();

  const handlers = createCurrencyHandlers({
    router,
    deleteMutation,
  });

  const actions = createCurrencyActions({
    onView: handlers.view,
    onEdit: handlers.edit,
    onDelete: handlers.delete,
  });
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }

  return <DataTable columns={currencyColumns(actions)} data={data} />;
};

export default Currency;
