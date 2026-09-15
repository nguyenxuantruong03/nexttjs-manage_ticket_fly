"use client";

import { Activity, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useResetRequestMetrics } from "@/hooks/system/metrics";
import { RequestMetricsSnapshot } from "@/types/system/metrics.type";

import { formatMs, formatNumber, getUsageLevel } from "../lib/format";
import { EmptyHint, MetricRowList, SectionCard } from "./metric-primitives";

function methodBadgeClass(method: string) {
  switch (method) {
    case "GET":
      return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400";
    case "POST":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400";
    case "PUT":
    case "PATCH":
      return "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400";
    case "DELETE":
      return "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400";
    default:
      return "";
  }
}

export function RequestsSection({ data }: { data: RequestMetricsSnapshot | null }) {
  const resetMutation = useResetRequestMetrics();

  if (!data) {
    return (
      <SectionCard title="Requests" icon={<Activity className="h-4 w-4" />}>
        <EmptyHint text="Không lấy được dữ liệu request." />
      </SectionCard>
    );
  }

  const topRoutes = [...data.routes].slice(0, 10);

  return (
    <SectionCard
      title="Requests"
      description={`${formatNumber(data.summary.totalRequestsSinceStart)} requests từ lúc khởi động`}
      icon={<Activity className="h-4 w-4" />}
      className="lg:col-span-2"
    >
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-md bg-muted p-3">
          <p className="text-xs text-muted-foreground">Requests/giây (60s)</p>
          <p className="text-lg font-semibold tabular-nums">
            {data.summary.requestsPerSecondLast60s.toFixed(2)}
          </p>
        </div>
        <div className="rounded-md bg-muted p-3">
          <p className="text-xs text-muted-foreground">Tỉ lệ lỗi</p>
          <p className="text-lg font-semibold tabular-nums">
            {data.summary.overallErrorRatePercent.toFixed(2)}%
          </p>
        </div>
        <div className="flex items-center justify-center rounded-md bg-muted p-3">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5"
            disabled={resetMutation.isPending}
            onClick={() => resetMutation.mutate()}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset counters
          </Button>
        </div>
      </div>

      <div>
        <p className="mb-1 text-sm text-muted-foreground">
          Top endpoint theo số lượt gọi
        </p>
        {topRoutes.length > 0 ? (
          <MetricRowList>
            {topRoutes.map((r) => {
              const errorLevel = getUsageLevel(r.errorRatePercent, {
                warning: 1,
                critical: 5,
              });
              return (
                <div
                  key={`${r.method} ${r.path}`}
                  className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={`shrink-0 font-mono text-[10px] ${methodBadgeClass(r.method)}`}
                    >
                      {r.method}
                    </Badge>
                    <span className="truncate font-mono text-sm">
                      {r.path}
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 text-right">
                    <div>
                      <p className="text-sm font-medium tabular-nums">
                        {formatNumber(r.requestCount)}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        lượt gọi
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium tabular-nums">
                        {formatMs(r.avgDurationMs)}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        avg
                      </p>
                    </div>
                    {r.errorRatePercent > 0 && (
                      <Badge
                        variant="secondary"
                        className={
                          errorLevel === "good"
                            ? undefined
                            : errorLevel === "warning"
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                              : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400"
                        }
                      >
                        {r.errorRatePercent.toFixed(1)}% lỗi
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </MetricRowList>
        ) : (
          <EmptyHint text="Chưa có request nào được ghi nhận." />
        )}
      </div>
    </SectionCard>
  );
}
