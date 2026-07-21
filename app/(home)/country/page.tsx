"use client";

import { DataTable } from "@/components/ui/data-table";
import { useCountries, useDeleteCountry } from "@/hooks/location/country";
import { countryColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { createCountryHandlers } from "./features/handlers";
import { createCountryActions } from "./features/actions";

const CountryPage = () => {
  const deleteMutation = useDeleteCountry();
  const { data, isPending, error } = useCountries();
  const router = useRouter();

  const handlers = createCountryHandlers({
    router,
    deleteMutation,
  });

  const actions = createCountryActions({
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

  return <DataTable columns={countryColumns(actions)} data={data} />;
};

export default CountryPage;
