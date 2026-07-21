"use client";

import { DataTable } from "@/components/ui/data-table";
import { useCountries } from "@/hooks/location/country";
import { cityColumns } from "./components/columns";
import { useCities, useDeleteCity } from "@/hooks/location/city";
import { useRouter } from "next/navigation";
import { createCityHandlers } from "./features/handlers";
import { createCityActions } from "./features/actions";

const CityPage = () => {
  const deleteMutation = useDeleteCity();
  const { data, isPending, error } = useCities();
  const router = useRouter();

  const handlers = createCityHandlers({
    router,
    deleteMutation,
  });

  const actions = createCityActions({
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

  return <DataTable columns={cityColumns(actions)} data={data} />;
};

export default CityPage;
