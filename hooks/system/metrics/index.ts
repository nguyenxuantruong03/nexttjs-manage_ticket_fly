"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { MetricsService } from "@/services/system/metrics/client";

// ======================================================
// Query Keys
// ======================================================

export const metricsQueryKeys = {
  all: ["metrics"] as const,

  snapshot: () => [...metricsQueryKeys.all, "snapshot"] as const,

  requests: () => [...metricsQueryKeys.all, "requests"] as const,
};

const AUTO_REFRESH_MS = 5000;

// ======================================================
// System Snapshot
// Process / System / Disk / DB / Redis
// ======================================================

export function useMetricsSnapshot(enabled = true) {
  return useQuery({
    queryKey: metricsQueryKeys.snapshot(),
    queryFn: () => MetricsService.getSnapshot(),
    enabled,

    // Live metrics: always stale so refetch gets the latest data.
    staleTime: 0,

    // Poll every 5 seconds while the tab is active.
    refetchInterval: AUTO_REFRESH_MS,
    refetchIntervalInBackground: false,
  });
}

// ======================================================
// Request Metrics
// ======================================================

export function useRequestMetrics(enabled = true) {
  return useQuery({
    queryKey: metricsQueryKeys.requests(),
    queryFn: () => MetricsService.getRequestMetrics(),
    enabled,

    // Live metrics: always stale so refetch gets the latest data.
    staleTime: 0,

    // Poll every 5 seconds while the tab is active.
    refetchInterval: AUTO_REFRESH_MS,
    refetchIntervalInBackground: false,
  });
}

// ======================================================
// Reset Request Metrics
// ======================================================

export function useResetRequestMetrics() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => MetricsService.resetRequestMetrics(),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: metricsQueryKeys.requests(),
      });
    },
  });
}