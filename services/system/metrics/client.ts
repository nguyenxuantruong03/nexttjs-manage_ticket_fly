import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";

import {
  MetricsSnapshot,
  RequestMetricsSnapshot,
} from "@/types/system/metrics.type";

// TODO: thêm METRICS: "/admin/metrics" vào API endpoints của bạn (file @/lib/api/endpoints)
export const MetricsService = {
  getSnapshot: async (): Promise<MetricsSnapshot> => {
    const response = await clientHttp.get<MetricsSnapshot>(
      `${API.METRICS}/snapshot`,
    );

    return response.data;
  },

  getRequestMetrics: async (): Promise<RequestMetricsSnapshot> => {
    const response = await clientHttp.get<RequestMetricsSnapshot>(
      `${API.METRICS}/requests`,
    );

    return response.data;
  },

  resetRequestMetrics: async (): Promise<{ ok: boolean }> => {
    const response = await clientHttp.post<{ ok: boolean }>(
      `${API.METRICS}/requests/reset`,
    );

    return response.data;
  },
};
