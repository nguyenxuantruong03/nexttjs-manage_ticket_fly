import { Server } from "lucide-react";

import { SystemMetrics } from "@/types/system/metrics.type";

import { formatBytesPerSec, formatNumber } from "../lib/format";
import { MetricRow, MetricRowList, SectionCard, UsageBar } from "./metric-primitives";

export function SystemSection({ data }: { data: SystemMetrics }) {
  return (
    <SectionCard
      title="System"
      description={`${data.hostname} · ${data.platform}/${data.arch} · Node ${data.nodeVersion}`}
      icon={<Server className="h-4 w-4" />}
    >
      <UsageBar
        label={`CPU (${data.cpuCores} cores)`}
        valueLabel={`${data.cpuPercent.toFixed(1)}%`}
        percent={data.cpuPercent}
        thresholds={{ warning: 65, critical: 88 }}
      />

      <UsageBar
        label="RAM"
        valueLabel={`${data.memory.usedMb.toFixed(0)} / ${data.memory.totalMb.toFixed(0)} MB`}
        percent={data.memory.usedPercent}
      />

      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          ["1 phút", data.loadAvg["1m"]],
          ["5 phút", data.loadAvg["5m"]],
          ["15 phút", data.loadAvg["15m"]],
        ].map(([label, value]) => (
          <div key={label as string} className="rounded-md bg-muted p-2">
            <p className="text-xs text-muted-foreground">Load {label}</p>
            <p className="text-sm font-semibold tabular-nums">
              {(value as number).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <MetricRowList>
        <MetricRow
          primary="Network In"
          value={formatBytesPerSec(data.network.rxBytesPerSec)}
        />
        <MetricRow
          primary="Network Out"
          value={formatBytesPerSec(data.network.txBytesPerSec)}
        />
        <MetricRow
          primary="TCP connections"
          value={
            data.network.activeTcpConnections !== null
              ? formatNumber(data.network.activeTcpConnections)
              : "—"
          }
        />
      </MetricRowList>
    </SectionCard>
  );
}
