"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FuelTypeService } from "@/services/catalog/fuel-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_OPTIONS,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const fuelTypeQueryKeys = {
  // ----------------------------------------------------
  // ROOT
  // ----------------------------------------------------

  all: ["fuel-type"] as const,

  // ----------------------------------------------------
  // LIST
  // ----------------------------------------------------

  lists: () => [...fuelTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...fuelTypeQueryKeys.lists(), { page, limit }] as const,

  // ----------------------------------------------------
  // DETAIL
  // ----------------------------------------------------

  details: () => [...fuelTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...fuelTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useFuelTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    /**
     * Dùng toàn bộ policy mặc định.
     *
     * Nếu FuelType không có behavior đặc biệt
     * thì không cần khai báo lại staleTime/gcTime/retry...
     */
    ...DEFAULT_QUERY_OPTIONS,

    queryKey: fuelTypeQueryKeys.list(page, limit),

    queryFn: () =>
      FuelTypeService.getMany({
        page,
        limit,
      }),

    enabled,

    /**
     * Pagination UX:
     *
     * Khi chuyển page, giữ data page cũ trong lúc
     * page mới đang fetch.
     *
     * Tránh màn hình trắng/loading toàn bộ table.
     */
    placeholderData: keepPreviousData,
  });
}

// ======================================================
// FIND ONE
// ======================================================

export function useFuelType(id: string, enabled = true) {
  return useQuery({
    /**
     * Detail không có behavior đặc biệt,
     * dùng default chung.
     */
    ...DEFAULT_QUERY_OPTIONS,

    queryKey: fuelTypeQueryKeys.detail(id),

    queryFn: () => FuelTypeService.getOne(id),

    /**
     * Không gọi API nếu:
     * - enabled = false
     * - id rỗng
     */
    enabled: enabled && Boolean(id),
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateFuelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FuelTypeService.create>[0]) =>
      FuelTypeService.create(data),

    onSuccess: async () => {
      /**
       * Create có thể làm thay đổi:
       * - page 1
       * - page 2
       * - các page pagination khác
       *
       * Vì vậy invalidate toàn bộ list cache.
       */
      await queryClient.invalidateQueries({
        queryKey: fuelTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateFuelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FuelTypeService.update>[1];
    }) => FuelTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      /**
       * Update ảnh hưởng:
       *
       * 1. List
       * 2. Detail hiện tại
       *
       * Chạy song song để giảm thời gian chờ.
       */
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: fuelTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: fuelTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteFuelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FuelTypeService.delete(id),

    onSuccess: async (_, id) => {
      /**
       * List cần invalidate vì:
       * - số lượng record thay đổi
       * - pagination có thể thay đổi
       */
      const invalidateLists = queryClient.invalidateQueries({
        queryKey: fuelTypeQueryKeys.lists(),
      });

      /**
       * Record đã bị delete nên detail cache
       * không còn giá trị.
       *
       * removeQueries phù hợp hơn invalidateQueries.
       */
      const removeDetail = queryClient.removeQueries({
        queryKey: fuelTypeQueryKeys.detail(id),
      });

      /**
       * Hai thao tác độc lập -> chạy song song.
       */
      await Promise.all([invalidateLists, removeDetail]);
    },
  });
}
