import { Cpu } from "lucide-react";

import { ProcessMetrics } from "@/types/system/metrics.type";

import { formatMs, formatUptime } from "../lib/format";
import {
  MetricRow,
  MetricRowList,
  SectionCard,
  UsageBar,
} from "./metric-primitives";

export function ProcessSection({ data }: { data: ProcessMetrics }) {
  const heapUsedPercent =
    data.heap.totalHeapMb > 0
      ? (data.heap.usedHeapMb / data.heap.totalHeapMb) * 100
      : 0;

  const gcTypes = Object.entries(data.gc.byType);

  return (
    <SectionCard
      title="Process"
      description={`PID ${data.pid} · uptime ${formatUptime(data.uptimeSec)}`}
      icon={<Cpu className="h-4 w-4" />}
    >
      <UsageBar
        label="CPU (process)"
        valueLabel={`${data.cpu.percent.toFixed(1)}%`}
        percent={data.cpu.percent}
        thresholds={{ warning: 60, critical: 85 }}
      />

      <UsageBar
        label="Heap sử dụng"
        valueLabel={`${data.heap.usedHeapMb.toFixed(0)} / ${data.heap.totalHeapMb.toFixed(0)} MB`}
        percent={heapUsedPercent}
      />

      {data.eventLoop && (
        <div>
          <p className="mb-1.5 text-sm text-muted-foreground">
            Event loop delay
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              ["p50", data.eventLoop.p50Ms],
              ["p95", data.eventLoop.p95Ms],
              ["p99", data.eventLoop.p99Ms],
              ["max", data.eventLoop.maxMs],
            ].map(([label, ms]) => (
              <div key={label as string} className="rounded-md bg-muted p-2">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-semibold tabular-nums">
                  {formatMs(ms as number)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="mb-1 text-sm text-muted-foreground">
          Garbage Collection ({data.gc.count} lần · tổng{" "}
          {formatMs(data.gc.totalDurationMs)})
        </p>
        {gcTypes.length > 0 ? (
          <MetricRowList>
            {gcTypes.map(([type, stat]) => (
              <MetricRow
                key={type}
                primary={type}
                secondary={`${stat.count} lần`}
                value={formatMs(stat.totalDurationMs)}
              />
            ))}
          </MetricRowList>
        ) : (
          <p className="text-xs text-muted-foreground">
            Chưa ghi nhận lần GC nào.
          </p>
        )}
      </div>

      <MetricRowList>
        <MetricRow
          primary="RSS"
          value={`${data.memory.rssMb.toFixed(0)} MB`}
        />
        <MetricRow
          primary="External + Buffers"
          value={`${(data.memory.externalMb + data.memory.arrayBuffersMb).toFixed(0)} MB`}
        />
      </MetricRowList>
    </SectionCard>
  );
}
