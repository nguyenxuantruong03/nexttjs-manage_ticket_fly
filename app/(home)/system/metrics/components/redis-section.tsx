import { Layers } from "lucide-react";

import { RedisMetrics } from "@/types/system/metrics.type";

import { formatDateTime, formatNumber, formatUptime } from "../lib/format";
import {
  EmptyHint,
  MetricRow,
  MetricRowList,
  SectionCard,
  UsageBar,
} from "./metric-primitives";

export function RedisSection({ data }: { data: RedisMetrics | null }) {
  if (!data) {
    return (
      <SectionCard title="Redis" icon={<Layers className="h-4 w-4" />}>
        <EmptyHint text="Không lấy được thông tin Redis." />
      </SectionCard>
    );
  }

  const rdbOk = data.persistence.rdbLastBgsaveStatus === "ok";
  const aofOk =
    !data.persistence.aofEnabled ||
    data.persistence.aofLastBgrewriteStatus === "ok";

  return (
    <SectionCard
      title="Redis"
      description={`${formatNumber(data.keys)} keys · uptime ${formatUptime(data.uptimeSec)} · role ${data.replication.role ?? "—"}`}
      icon={<Layers className="h-4 w-4" />}
    >
      <UsageBar
        label="Hit rate"
        valueLabel={`${data.stats.hitRatePercent.toFixed(1)}%`}
        percent={100 - data.stats.hitRatePercent}
        thresholds={{ warning: 20, critical: 40 }}
      />

      <UsageBar
        label="Memory fragmentation ratio"
        valueLabel={data.memory.fragmentationRatio.toFixed(2)}
        percent={Math.max(0, (data.memory.fragmentationRatio - 1) * 100)}
        thresholds={{ warning: 50, critical: 100 }}
      />

      <MetricRowList>
        <MetricRow
          primary="Memory dùng"
          value={`${data.memory.usedMb.toFixed(0)} MB`}
          secondary={`Peak ${data.memory.peakMb.toFixed(0)} MB`}
        />
        <MetricRow
          primary="Ops/giây"
          value={formatNumber(data.stats.instantaneousOpsPerSec)}
        />
        <MetricRow
          primary="Connected clients"
          value={formatNumber(data.stats.connectedClients)}
          secondary={
            data.stats.blockedClients > 0
              ? `${data.stats.blockedClients} đang bị block`
              : undefined
          }
          badge={data.stats.blockedClients > 0 ? "blocked" : undefined}
          badgeTone={data.stats.blockedClients > 0 ? "warning" : "default"}
        />
        <MetricRow
          primary="Evicted / Expired keys"
          value={`${formatNumber(data.stats.evictedKeys)} / ${formatNumber(data.stats.expiredKeys)}`}
        />
      </MetricRowList>

      <div>
        <p className="mb-1 text-sm text-muted-foreground">
          Persistence & Replication
        </p>
        <MetricRowList>
          <MetricRow
            primary="RDB last save"
            secondary={formatDateTime(data.persistence.rdbLastSaveTime)}
            badge={rdbOk ? "ok" : (data.persistence.rdbLastBgsaveStatus ?? "unknown")}
            badgeTone={rdbOk ? "good" : "critical"}
          />
          <MetricRow
            primary="AOF"
            secondary={
              data.persistence.aofEnabled ? "Đang bật" : "Đang tắt"
            }
            badge={
              data.persistence.aofEnabled
                ? (data.persistence.aofLastBgrewriteStatus ?? "unknown")
                : "disabled"
            }
            badgeTone={aofOk ? "good" : "critical"}
          />
          <MetricRow
            primary="Replicas kết nối"
            value={formatNumber(data.replication.connectedSlaves)}
          />
        </MetricRowList>
      </div>
    </SectionCard>
  );
}
