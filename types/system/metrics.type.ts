// ======================================================
// Process
// ======================================================

export interface ProcessMetrics {
  pid: number;
  uptimeSec: number;
  cpu: {
    percent: number;
    userMs: number;
    systemMs: number;
  };
  memory: {
    rssMb: number;
    heapTotalMb: number;
    heapUsedMb: number;
    externalMb: number;
    arrayBuffersMb: number;
  };
  heap: {
    heapSizeLimitMb: number;
    totalAvailableMb: number;
    totalHeapMb: number;
    usedHeapMb: number;
    mallocedMemoryMb: number;
    numberOfNativeContexts: number;
    numberOfDetachedContexts: number;
  };
  eventLoop: {
    meanMs: number;
    p50Ms: number;
    p95Ms: number;
    p99Ms: number;
    maxMs: number;
  } | null;
  gc: {
    count: number;
    totalDurationMs: number;
    lastDurationMs: number;
    byType: Record<string, { count: number; totalDurationMs: number }>;
  };
}

// ======================================================
// System
// ======================================================

export interface SystemMetrics {
  hostname: string;
  platform: string;
  arch: string;
  nodeVersion: string;
  cpuCores: number;
  cpuModel: string;
  cpuPercent: number;
  loadAvg: { "1m": number; "5m": number; "15m": number };
  memory: {
    totalMb: number;
    freeMb: number;
    usedMb: number;
    usedPercent: number;
  };
  network: {
    rxBytesPerSec: number;
    txBytesPerSec: number;
    activeTcpConnections: number | null;
  };
}

// ======================================================
// Disk
// ======================================================

export interface DiskMetrics {
  mount: string;
  totalMb: number;
  usedMb: number;
  availableMb: number;
  usedPercent: number;
}

// ======================================================
// Database
// ======================================================

export interface DatabaseTableSize {
  table: string;
  sizeMb: number;
}

export interface DatabaseDeadTuple {
  table: string;
  liveTuples: number;
  deadTuples: number;
  deadTuplePercent: number;
  lastVacuum: string | null;
}

export interface DatabaseSlowQuery {
  query: string;
  calls: number;
  meanExecMs: number;
  totalExecMs: number;
}

export interface DatabaseMetrics {
  sizeMb: number;
  tables: DatabaseTableSize[];
  connections: {
    total: number;
    byState: Record<string, number>;
  };
  cacheHitRatioPercent: number;
  deadTuples: DatabaseDeadTuple[];
  slowQueries: DatabaseSlowQuery[] | null;
}

// ======================================================
// Redis
// ======================================================

export interface RedisMetrics {
  uptimeSec: number;
  keys: number;
  memory: {
    usedMb: number;
    peakMb: number;
    rssMb: number;
    fragmentationRatio: number;
  };
  stats: {
    hitRatePercent: number;
    evictedKeys: number;
    expiredKeys: number;
    instantaneousOpsPerSec: number;
    totalConnectionsReceived: number;
    connectedClients: number;
    blockedClients: number;
  };
  persistence: {
    rdbLastSaveTime: string | null;
    rdbChangesSinceLastSave: number;
    rdbLastBgsaveStatus: string | null;
    aofEnabled: boolean;
    aofLastBgrewriteStatus: string | null;
  };
  replication: {
    role: string | null;
    connectedSlaves: number;
    masterReplOffset: number;
  };
}

// ======================================================
// System snapshot (root)
// ======================================================

export interface MetricsSnapshot {
  timestamp: string;
  process: ProcessMetrics;
  system: SystemMetrics;
  disk: DiskMetrics | null;
  database: DatabaseMetrics | null;
  redis: RedisMetrics | null;
}

// ======================================================
// Request metrics
// ======================================================

export interface RequestRouteMetric {
  method: string;
  path: string;
  requestCount: number;
  avgDurationMs: number;
  minDurationMs: number;
  maxDurationMs: number;
  avgResponseBytes: number;
  errorRatePercent: number;
  statusCounts: Record<string, number>;
}

export interface RequestMetricsSnapshot {
  timestamp: string;
  summary: {
    totalRequestsSinceStart: number;
    overallErrorRatePercent: number;
    requestsPerSecondLast60s: number;
  };
  routes: RequestRouteMetric[];
}
