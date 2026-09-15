"use client";

import { Cpu, Database, HardDrive, MemoryStick, RefreshCw } from "lucide-react";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";
import { Button } from "@/components/ui/button";

import { useMetricsSnapshot, useRequestMetrics } from "@/hooks/system/metrics";

import { formatDateTime } from "./lib/format";
import { StatCard } from "./components/metric-primitives";
import { ProcessSection } from "./components/process-section";
import { SystemSection } from "./components/system-section";
import { DiskSection } from "./components/disk-section";
import { DatabaseSection } from "./components/database-section";
import { RedisSection } from "./components/redis-section";
import { RequestsSection } from "./components/requests-section";

const MetricsPage = () => {
  const snapshotQuery = useMetricsSnapshot();
  const requestsQuery = useRequestMetrics();

  // Chỉ chặn cả trang ở lần load đầu tiên; sau đó dữ liệu tự refresh mỗi 5s
  // mà không hiện lại loading toàn trang (tránh giật màn hình).
  if (snapshotQuery.isPending) {
    return <LoadingPage />;
  }

  if (snapshotQuery.isError || !snapshotQuery.data) {
    return <ErrorPage />;
  }

  const { process, system, disk, database, redis, timestamp } =
    snapshotQuery.data;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">System Metrics</h1>
          <p className="text-sm text-muted-foreground">
            Giám sát Process, System, Disk, Database và Redis theo thời gian
            thực
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Cập nhật lúc {formatDateTime(timestamp)}</span>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            disabled={snapshotQuery.isFetching}
            onClick={() => snapshotQuery.refetch()}
          >
            <RefreshCw
              className={`h-3.5 w-3.5 ${snapshotQuery.isFetching ? "animate-spin" : ""}`}
            />
            Làm mới
          </Button>
        </div>
      </div>

      {/* ==================== Overview ==================== */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          label="CPU (system)"
          value={system.cpuPercent.toFixed(1)}
          unit="%"
          hint={`${system.cpuCores} cores`}
          icon={<Cpu className="h-4 w-4" />}
          percent={system.cpuPercent}
        />
        <StatCard
          label="RAM"
          value={system.memory.usedPercent.toFixed(1)}
          unit="%"
          hint={`${system.memory.usedMb.toFixed(0)} / ${system.memory.totalMb.toFixed(0)} MB`}
          icon={<MemoryStick className="h-4 w-4" />}
          percent={system.memory.usedPercent}
        />
        <StatCard
          label="Disk"
          value={disk ? disk.usedPercent.toFixed(1) : "—"}
          unit={disk ? "%" : undefined}
          hint={disk ? disk.mount : "Không có dữ liệu"}
          icon={<HardDrive className="h-4 w-4" />}
          percent={disk?.usedPercent}
        />
        <StatCard
          label="DB cache hit"
          value={database ? database.cacheHitRatioPercent.toFixed(1) : "—"}
          unit={database ? "%" : undefined}
          hint={database ? `${database.sizeMb.toFixed(0)} MB` : "Không có dữ liệu"}
          icon={<Database className="h-4 w-4" />}
        />
      </div>

      {/* ==================== Sections ==================== */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ProcessSection data={process} />
        <SystemSection data={system} />
        <DiskSection data={disk} />
        <DatabaseSection data={database} />
        <RedisSection data={redis} />
        <RequestsSection data={requestsQuery.data ?? null} />
      </div>
    </div>
  );
};

export default MetricsPage;
