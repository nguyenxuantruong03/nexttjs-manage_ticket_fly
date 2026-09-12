"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useRouter } from "next/navigation";

import { useSystemSettings } from "@/hooks/system/system-setting";
import { systemSettingColumns } from "./components/columns";
import { createSystemSettingHandlers } from "./features/handlers";
import { createSystemSettingActions } from "./features/actions";

const SystemSetting = () => {
  const { data, isPending, error } = useSystemSettings();

  const router = useRouter();

  const handlers = createSystemSettingHandlers({
    router,
  });

  const actions = createSystemSettingActions({
    onView: handlers.view,
    onUpdate: handlers.update,
  });

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <DataTable
      columns={systemSettingColumns(actions)}
      data={data ?? []}
      onRowClick={({ id }) => handlers.view(id)}
      onRowDoubleClick={({ id }) => handlers.update(id)}
    />
  );
};

export default SystemSetting;
