"use client";

import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { currencyColumns } from "./components/columns";
import { useCurrencies } from "@/hooks/cities/currencies";

const Currency = () => {
  const { data, isPending, error } = useCurrencies();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }

  return (
    <FormPage
      label="Currency"
      title="Manage Currency"
      link="/currency/create"
      action="Create"
      apiPath="currency"
      description="Currency"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable columns={currencyColumns} data={data ?? []} />
      </div>
    </FormPage>
  );
};

export default Currency;
