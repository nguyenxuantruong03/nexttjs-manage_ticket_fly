"use client";

import { DataTable } from "@/components/ui/data-table";
import { currencyColumns } from "./components/columns";
import { useCurrencies, useDeleteCurrency } from "@/hooks/location/currency";
import { useRouter } from "next/navigation";
import { createCurrencyActions } from "./features/actions";
import { createCurrencyHandlers } from "./features/handlers";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
const Currency = () => {
  const router = useRouter();

  const deleteMutation = useDeleteCurrency();
  const { data, isPending, error } = useCurrencies();

  const handlers = createCurrencyHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCurrencyActions,
    deleteTitle: "Delete currency",
    deleteDescription: "Are you sure you want to delete this currency?",
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={currencyColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default Currency;
