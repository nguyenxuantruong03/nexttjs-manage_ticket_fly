import { Database } from "lucide-react";

import { DatabaseMetrics } from "@/types/system/metrics.type";

import { formatMs, formatNumber, getUsageLevel } from "../lib/format";
import {
  EmptyHint,
  MetricRow,
  MetricRowList,
  SectionCard,
  UsageBar,
} from "./metric-primitives";

export function DatabaseSection({ data }: { data: DatabaseMetrics | null }) {
  if (!data) {
    return (
      <SectionCard title="Database" icon={<Database className="h-4 w-4" />}>
        <EmptyHint text="Không lấy được thông tin database." />
      </SectionCard>
    );
  }

  const topTables = data.tables.slice(0, 5);
  const bloatedTables = data.deadTuples.slice(0, 5);

  return (
    <SectionCard
      title="Database"
      description={`Dung lượng ${data.sizeMb.toFixed(0)} MB · ${data.connections.total} kết nối`}
      icon={<Database className="h-4 w-4" />}
    >
      <UsageBar
        label="Cache hit ratio"
        valueLabel={`${data.cacheHitRatioPercent.toFixed(1)}%`}
        percent={100 - data.cacheHitRatioPercent}
        thresholds={{ warning: 20, critical: 40 }}
      />

      <div>
        <p className="mb-1 text-sm text-muted-foreground">
          Kết nối theo trạng thái
        </p>
        <MetricRowList>
          {Object.entries(data.connections.byState).map(([state, count]) => (
            <MetricRow key={state} primary={state} value={formatNumber(count)} />
          ))}
        </MetricRowList>
      </div>

      <div>
        <p className="mb-1 text-sm text-muted-foreground">
          Bảng lớn nhất
        </p>
        {topTables.length > 0 ? (
          <MetricRowList>
            {topTables.map((t) => (
              <MetricRow
                key={t.table}
                primary={t.table}
                value={`${t.sizeMb.toFixed(1)} MB`}
              />
            ))}
          </MetricRowList>
        ) : (
          <EmptyHint text="Chưa có dữ liệu bảng." />
        )}
      </div>

      <div>
        <p className="mb-1 text-sm text-muted-foreground">
          Bloat (dead tuples) — cần VACUUM nếu % cao
        </p>
        {bloatedTables.length > 0 ? (
          <MetricRowList>
            {bloatedTables.map((t) => {
              const level = getUsageLevel(t.deadTuplePercent, {
                warning: 20,
                critical: 40,
              });
              return (
                <MetricRow
                  key={t.table}
                  primary={t.table}
                  secondary={`${formatNumber(t.deadTuples)} dead / ${formatNumber(t.liveTuples)} live`}
                  badge={`${t.deadTuplePercent.toFixed(1)}%`}
                  badgeTone={level}
                />
              );
            })}
          </MetricRowList>
        ) : (
          <EmptyHint text="Không có bảng nào bị bloat đáng kể." />
        )}
      </div>

      <div>
        <p className="mb-1 text-sm text-muted-foreground">
          Query chậm nhất (mean exec time)
        </p>
        {data.slowQueries === null ? (
          <EmptyHint text="pg_stat_statements chưa được bật trên database." />
        ) : data.slowQueries.length > 0 ? (
          <MetricRowList>
            {data.slowQueries.map((q, idx) => (
              <MetricRow
                key={idx}
                primary={q.query}
                secondary={`${formatNumber(q.calls)} lượt gọi`}
                value={formatMs(q.meanExecMs)}
              />
            ))}
          </MetricRowList>
        ) : (
          <EmptyHint text="Chưa ghi nhận query chậm." />
        )}
      </div>
    </SectionCard>
  );
}
