import { HardDrive } from "lucide-react";

import { DiskMetrics } from "@/types/system/metrics.type";

import { EmptyHint, SectionCard, UsageBar } from "./metric-primitives";

export function DiskSection({ data }: { data: DiskMetrics | null }) {
  return (
    <SectionCard
      title="Disk"
      description={data ? `Mount ${data.mount}` : undefined}
      icon={<HardDrive className="h-4 w-4" />}
    >
      {data ? (
        <UsageBar
          label="Dung lượng đã dùng"
          valueLabel={`${data.usedMb.toFixed(0)} / ${data.totalMb.toFixed(0)} MB`}
          percent={data.usedPercent}
        />
      ) : (
        <EmptyHint text="Không lấy được thông tin ổ đĩa." />
      )}
    </SectionCard>
  );
}
